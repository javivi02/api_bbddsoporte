import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEstacionesTorre } from '../bbdd/models/Estaciones_torre.js'
import { getPagination, getPagingData } from '../utils/pagination.js'

const EstacionesTorre = modeloEstacionesTorre(sequelize)

export const getEstacionesTorreServices = async () => {
  return await EstacionesTorre.findAll()
}

export const getEstacionesTorreServicesCheckDuplicate = async (value, column) => {
  const whereClause = {}
  whereClause[column] = value

  return await EstacionesTorre.findOne({ where: whereClause })
}

export const getEstacionesTorreServicesID = async (id) => {
  console.log(id)
  return await EstacionesTorre.findByPk(id)
}

export const createEstacionesTorreService = async (data) => {
  return await EstacionesTorre.create(data)
}

export const updateEstacionesTorreService = async (id, data) => {
  const est = await EstacionesTorre.findByPk(id)
  if (!est) return null
  await est.update(data)
  return est
}

export const deleteEstacionesTorreService = async (id) => {
  const est = await EstacionesTorre.findByPk(id)
  if (!est) return null
  await est.destroy()
  return true
}

export const getEstacionesTorreUbicacionServices = async (ubicacion) => {
  const [results, metadata] = await sequelize.query(`SELECT
        Estaciones_torre.Estaciones_torreID,
        Estaciones_torre.Identificacion,
        Estaciones_torre.Direccion_ip,
        Estaciones_torre.AreaID,
        Areas.Area,
        Edificio.Edificio,
        Planta.Planta,
        Estaciones_torre.Caja,
        Estaciones_torre.SwitchID,
        Estaciones_torre.Puerto_Switch,
        Estaciones_torre.Dongle,
        Estaciones_torre.Sysid,
        Estaciones_torre.Cpu,
        Estaciones_torre.Cpu_serie,
        Estaciones_torre.Cpu_rtve,
        Estaciones_torre.Monitor,
        Estaciones_torre.Monitor_serie,
        Estaciones_torre.Monitor_rtve,
        Estaciones_torre.Monitor2,
        Estaciones_torre.Monitor2_serie,
        Estaciones_torre.Monitor2_rtve,
        Estaciones_torre.Mesa_sonidoID,
        Estaciones_torre.Mesa_sonido_serie,
        Estaciones_torre.Observaciones,
        Estaciones_torre.Artist_DNxIO_serie,
        Estaciones_torre.Artist_DNxIO_rtve,
        Estaciones_torre.Desafectado
        FROM Estaciones_torre
        LEFT OUTER JOIN Areas ON Estaciones_torre.AreaID = Areas.AreaID
        LEFT OUTER JOIN Edificio ON Areas.EdificioID = Edificio.EdificioID
        LEFT OUTER JOIN Planta ON Areas.PlantaID = Planta.PlantaID
        ORDER BY Estaciones_torre.Estaciones_torreID`)

  return results
}

export const getEstacionesTorreUbicacionPaginacionServices = async (page = 1, perPage = 10, searchWord, condition, order = 'Estaciones_torre.Estaciones_torreID') => {
  const { limit, offset } = getPagination(page, perPage)

  // Configurar búsqueda y condiciones
  const conditions = []
  const replacements = []

  if (searchWord && searchWord.trim() !== '') {
    // Dividir en palabras individuales y filtrar vacías
    const words = searchWord.trim().split(/\s+/).filter(word => word.length > 0)

    // Para cada palabra, crear una condición que busque en todos los campos
    const wordConditions = words.map(word => {
      const searchPattern = `%${word}%`
      // Agregar el patrón 26 veces (una por cada campo)
      replacements.push(...Array(26).fill(searchPattern))

      return `(
        CAST(Estaciones_torre.Estaciones_torreID AS CHAR) LIKE ? OR
        Estaciones_torre.Identificacion LIKE ? OR
        Estaciones_torre.Direccion_ip LIKE ? OR
        CAST(Estaciones_torre.AreaID AS CHAR) LIKE ? OR
        Areas.Area LIKE ? OR
        Edificio.Edificio LIKE ? OR
        Planta.Planta LIKE ? OR
        Estaciones_torre.Caja LIKE ? OR
        CAST(Estaciones_torre.SwitchID AS CHAR) LIKE ? OR
        Estaciones_torre.Puerto_Switch LIKE ? OR
        Estaciones_torre.Dongle LIKE ? OR
        Estaciones_torre.Sysid LIKE ? OR
        Estaciones_torre.Cpu LIKE ? OR
        Estaciones_torre.Cpu_serie LIKE ? OR
        Estaciones_torre.Cpu_rtve LIKE ? OR
        Estaciones_torre.Monitor LIKE ? OR
        Estaciones_torre.Monitor_serie LIKE ? OR
        Estaciones_torre.Monitor_rtve LIKE ? OR
        Estaciones_torre.Monitor2 LIKE ? OR
        Estaciones_torre.Monitor2_serie LIKE ? OR
        Estaciones_torre.Monitor2_rtve LIKE ? OR
        CAST(Estaciones_torre.Mesa_sonidoID AS CHAR) LIKE ? OR
        Estaciones_torre.Mesa_sonido_serie LIKE ? OR
        Estaciones_torre.Artist_DNxIO_serie LIKE ? OR
        Estaciones_torre.Artist_DNxIO_rtve LIKE ? OR
        Estaciones_torre.Observaciones LIKE ?
      )`
    })

    // Unir todas las condiciones de palabras con AND
    // Esto asegura que TODAS las palabras deben aparecer (en cualquier campo)
    conditions.push(wordConditions.join(' AND '))
  }

  if (condition && condition.trim() !== '') {
    conditions.push(`(${condition.trim()})`)
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

  // Joins compartidos
  const joins = `FROM Estaciones_torre
    LEFT JOIN Areas ON Estaciones_torre.AreaID = Areas.AreaID
    LEFT JOIN Edificio ON Areas.EdificioID = Edificio.EdificioID
    LEFT JOIN Planta ON Areas.PlantaID = Planta.PlantaID`

  const baseQuery = `SELECT
    Estaciones_torre.Estaciones_torreID,
    Estaciones_torre.Identificacion,
    Estaciones_torre.Direccion_ip,
    Estaciones_torre.AreaID,
    Edificio.Edificio,
    Planta.Planta,
    Estaciones_torre.Caja,
    Estaciones_torre.SwitchID,
    Estaciones_torre.Puerto_Switch,
    Estaciones_torre.Dongle,
    Estaciones_torre.Sysid,
    Estaciones_torre.Cpu,
    Estaciones_torre.Cpu_serie,
    Estaciones_torre.Cpu_rtve,
    Estaciones_torre.Monitor,
    Estaciones_torre.Monitor_serie,
    Estaciones_torre.Monitor_rtve,
    Estaciones_torre.Monitor2,
    Estaciones_torre.Monitor2_serie,
    Estaciones_torre.Monitor2_rtve,
    Estaciones_torre.Mesa_sonidoID,
    Estaciones_torre.Mesa_sonido_serie,
    Estaciones_torre.Artist_DNxIO_serie,
    Estaciones_torre.Artist_DNxIO_rtve,
    Estaciones_torre.Desafectado,
    Estaciones_torre.Observaciones
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
