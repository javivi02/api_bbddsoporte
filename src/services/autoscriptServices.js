import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAutoscript } from '../bbdd/models/Autoscript.js'


const Autoscript = modeloAutoscript(sequelize)

export const getAutoscriptServices = async () => {
  return await Autoscript.findAll()
}

export const createAutoscriptService = async (data) => {
  return await Autoscript.create(data)
}

export const updateAutoscriptService = async (id, data) => {
  const auto = await Autoscript.findByPk(id)
  if (!auto) return null
  await auto.update(data)
  return auto
}

export const deleteAutoscriptService = async (id) => {
  const auto = await Autoscript.findByPk(id)
  if (!auto) return null
  await auto.destroy()
  return true
}
