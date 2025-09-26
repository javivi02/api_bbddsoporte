import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEstacionesTrabajo } from '../bbdd/models/EstacionesTrabajo.js'


const estacionesTrabajo = modeloEstacionesTrabajo(sequelize)

export const getEstacionesTrabajoServices = async () => {
  const [results, metadata] = await sequelize.query(`SELECT
    \`Estaciones _trabajo\`.Estaciones_trabajoID,
    \`Estaciones _trabajo\`.Identificacion,
    \`Estaciones _trabajo\`.Direccion_ip,
    \`Estaciones _trabajo\`.AreaID,
    \`Estaciones _trabajo\`.Caja,
    \`Estaciones _trabajo\`.SwitchID,
    \`Estaciones _trabajo\`.Puerto_Switch,
    \`Estaciones _trabajo\`.Cpu,
    \`Estaciones _trabajo\`.Cpu_serie,
    \`Estaciones _trabajo\`.Cpu_rtve,
    \`Estaciones _trabajo\`.Monitor,
    \`Estaciones _trabajo\`.Monitor_serie,
    \`Estaciones _trabajo\`.Monitor_rtve,
    \`Estaciones _trabajo\`.Mesa_sonidoID,
    \`Estaciones _trabajo\`.Mesa_sonido_serie,
    \`Estaciones _trabajo\`.Observaciones,
    Edificio.Edificio,
    Planta.Planta,
    Areas.Area,
    \`Estaciones _trabajo\`.Desafectado
    FROM \`Estaciones _trabajo\`
    LEFT OUTER JOIN Areas ON \`Estaciones _trabajo\`.AreaID = Areas.AreaID
    LEFT OUTER JOIN Edificio ON Areas.EdificioID = Edificio.EdificioID
    LEFT OUTER JOIN Planta ON Areas.PlantaID = Planta.PlantaID
    ORDER BY \`Estaciones _trabajo\`.Estaciones_trabajoID ASC`)
  return results
}

export const createEstacionesTrabajoService = async (data) => {
  return await estacionesTrabajo.create(data)
}

export const updateEstacionesTrabajoService = async (id, data) => {
  const est = await estacionesTrabajo.findByPk(id)
  if (!est) return null
  await est.update(data)
  return est
}

export const deleteEstacionesTrabajoService = async (id) => {
  const est = await estacionesTrabajo.findByPk(id)
  if (!est) return null
  await est.destroy()
  return true
}
