import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEstacionesTorre } from '../bbdd/models/Estaciones_torre.js'


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
        Edificio.Edificio,
        Planta.Planta,
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
