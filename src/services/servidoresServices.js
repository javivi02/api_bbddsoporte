import { sequelize } from '../bbdd/dbConnection.js'
import { modeloServidores } from '../bbdd/models/Servidores.js'
import { getPagination, getPagingData } from '../utils/pagination.js'

const Servidores = modeloServidores(sequelize)

export const getServidoresServices = async () => {
  return await Servidores.findAll()
}

export const getServidoresServicesCheckDuplicate = async (value, column) => {
  const whereClause = {}
  whereClause[column] = value

  return await Servidores.findOne({ where: whereClause })
}

export const createServidoresService = async (data) => {
  return await Servidores.create(data)
}

export const updateServidoresService = async (id, data) => {
  const servidor = await Servidores.findByPk(id)
  if (!servidor) return null
  await servidor.update(data)
  return servidor
}

export const deleteServidoresService = async (id) => {
  const servidor = await Servidores.findByPk(id)
  if (!servidor) return null
  await servidor.destroy()
  return true
}

export const getServidoresPaginacionServices = async ({ page, perPage, searchWord, condition, order = 'ServidoresID' }) => {
  const { limit, offset } = getPagination(page, perPage)

  // Configurar búsqueda y conditiones
  const conditions = []
  let replacements = []

  if (searchWord && searchWord.trim() !== '') {
    const searchPattern = `%${searchWord.trim()}%`
    conditions.push(`(
      CAST(ServidoresID AS CHAR) LIKE ? OR
      Identificacion LIKE ? OR
      Direccion_ip LIKE ? OR
      Direccion_ip2 LIKE ? OR
      Tipo LIKE ? OR
      Modelo LIKE ? OR
      Numero_serie LIKE ? OR
      Etiqueta_rtve LIKE ? OR
      Garantia LIKE ? OR
      CAST(EdificioID AS CHAR) LIKE ? OR
      CAST(PlantaID AS CHAR) LIKE ? OR
      CAST(Sala_maquinasID AS CHAR) LIKE ? OR
      CAST(UbicacionID AS CHAR) LIKE ? OR
      Dongle LIKE ? OR
      Sysid LIKE ? OR
      CAST(SwitchID AS CHAR) LIKE ? OR
      Puerto_Switch LIKE ? OR
      Observaciones LIKE ?
    )`)
    replacements = Array(18).fill(searchPattern)
  }

  if (condition && condition.trim() !== '') {
    conditions.push(`(${condition.trim()})`)
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

  // Joins compartidos
  const joins = 'FROM Servidores'

  const baseQuery = `SELECT
          ServidoresID,
          Identificacion,
          Direccion_ip,
          Direccion_ip2,
          Tipo,
          Modelo,
          Numero_serie,
          Etiqueta_rtve,
          Garantia,
          EdificioID,
          PlantaID,
          Sala_maquinasID,
          UbicacionID,
          Dongle,
          Sysid,
          SwitchID,
          Puerto_Switch,
          Observaciones,
          Desafectado
          ${joins}
          ${whereClause}
          ORDER BY ${order}
          LIMIT ${limit} OFFSET ${offset}`

  const countQuery = `SELECT COUNT(*) as count ${joins} ${whereClause}`

  const [results] = await sequelize.query(baseQuery, {
    replacements: replacements.length > 0 ? replacements : undefined
  })

  const [[{ count: totalItems }]] = await sequelize.query(countQuery, {
    replacements: replacements.length > 0 ? replacements : undefined
  })

  return getPagingData(results, totalItems, page, limit)
}
