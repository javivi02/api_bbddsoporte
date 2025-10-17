import { sequelize } from '../bbdd/dbConnection.js'
import { modeloDesafectados } from '../bbdd/models/Desafectados.js'

const Desafectados = modeloDesafectados(sequelize)

export const getDesafectadosServices = async () => {
  return await Desafectados.findAll()
}

export const createDesafectadosService = async (data) => {
  return await Desafectados.create(data)
}

export const updateDesafectadosService = async (id, data) => {
  const desafectado = await Desafectados.findByPk(id)
  if (!desafectado) return null
  await desafectado.update(data)
  return desafectado
}

export const deleteDesafectadosService = async (id) => {
  const desafectado = await Desafectados.findByPk(id)
  if (!desafectado) return null
  await desafectado.destroy()
  return true
}
