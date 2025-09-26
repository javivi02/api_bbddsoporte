import { sequelize } from '../bbdd/dbConnection.js'
import { modeloServidores } from '../bbdd/models/Servidores.js'


const Servidores = modeloServidores(sequelize)

export const getServidoresServices = async () => {
  return await Servidores.findAll()
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
