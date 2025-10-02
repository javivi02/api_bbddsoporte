import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEstacionesTorre } from '../bbdd/models/Estaciones_torre.js'
import { getPagination, getPagingData } from '../utils/pagination.js'


const EstacionesTorre = modeloEstacionesTorre(sequelize)

export const getEstacionesTorreServices = async () => {
  return await EstacionesTorre.findAll()
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

export const getEstacionesTorreUbicacionPaginacionServices = async (page = 1, perPage = 10, word) => {
  const { limit, offset } = getPagination(page, perPage)

  // Construir la cláusula WHERE si hay palabras de búsqueda
  let whereClause = ''
  let havingClause = ''
  
  if (word && word.trim() !== '') {
    const words = word.trim().split(/\s+/) // Dividir por espacios
    const conditions = words.map(() => `(
      CAST(Estaciones_torre.Estaciones_torreID AS CHAR) LIKE ? OR
      Estaciones_torre.Identificacion LIKE ? OR
      Estaciones_torre.Direccion_ip LIKE ? OR
      CAST(Estaciones_torre.AreaID AS CHAR) LIKE ? OR
      Edificio.Edificio LIKE ? OR
      Planta.Planta LIKE ? OR
      Areas.Area LIKE ? OR
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
    )`).join(' AND ')
    
    whereClause = `WHERE ${conditions}`
  }

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
        FROM Estaciones_torre
        LEFT OUTER JOIN Areas ON Estaciones_torre.AreaID = Areas.AreaID
        LEFT OUTER JOIN Edificio ON Areas.EdificioID = Edificio.EdificioID
        LEFT OUTER JOIN Planta ON Areas.PlantaID = Planta.PlantaID
        ${whereClause}
        ORDER BY Estaciones_torre.Estaciones_torreID
        LIMIT ${limit} 
        OFFSET ${offset}`

  const countQuery = `SELECT COUNT(*) as count 
        FROM Estaciones_torre
        LEFT OUTER JOIN Areas ON Estaciones_torre.AreaID = Areas.AreaID
        LEFT OUTER JOIN Edificio ON Areas.EdificioID = Edificio.EdificioID
        LEFT OUTER JOIN Planta ON Areas.PlantaID = Planta.PlantaID
        ${whereClause}`

  // Preparar los valores de los parámetros
  let replacements = []
  if (word && word.trim() !== '') {
    const words = word.trim().split(/\s+/)
    words.forEach(w => {
      const searchPattern = `%${w}%`
      // 26 campos por palabra (según la cantidad de campos en la condición)
      for (let i = 0; i < 26; i++) {
        replacements.push(searchPattern)
      }
    })
  }

  const [results, metadata] = await sequelize.query(baseQuery, {
    replacements: replacements.length > 0 ? replacements : undefined
  })

  const countResult = await sequelize.query(countQuery, {
    replacements: replacements.length > 0 ? replacements : undefined
  })
  
  const totalItems = countResult[0][0].count
  return getPagingData(results, totalItems, page, limit)
}
