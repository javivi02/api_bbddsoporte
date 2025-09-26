import { sequelize } from '../bbdd/dbConnection.js'
import { modeloServidoresCctt } from '../bbdd/models/Servidores_cctt.js'


const ServidoresCctt = modeloServidoresCctt(sequelize)

export const getServidoresCcttServices = async () => {
  return await ServidoresCctt.findAll()
}

export const createServidoresCcttService = async (data) => {
  return await ServidoresCctt.create(data)
}

export const updateServidoresCcttService = async (id, data) => {
  const servidor = await ServidoresCctt.findByPk(id)
  if (!servidor) return null
  await servidor.update(data)
  return servidor
}

export const deleteServidoresCcttService = async (id) => {
  const servidor = await ServidoresCctt.findByPk(id)
  if (!servidor) return null
  await servidor.destroy()
  return true
}
