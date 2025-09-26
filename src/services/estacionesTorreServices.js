import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEstacionesTorre } from '../bbdd/models/Estaciones_torre.js'


const EstacionesTorre = modeloEstacionesTorre(sequelize)

export const getEstacionesTorreServices = async () => {
  return await EstacionesTorre.findAll()
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
