import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEdificio } from '../bbdd/models/Edificio.js'


const Edificio = modeloEdificio(sequelize)

export const getEdificioServices = async () => {
  return await Edificio.findAll()
}

export const createEdificioService = async (data) => {
  return await Edificio.create(data)
}

export const updateEdificioService = async (id, data) => {
  const edificio = await Edificio.findByPk(id)
  if (!edificio) return null
  await edificio.update(data)
  return edificio
}

export const deleteEdificioService = async (id) => {
  const edificio = await Edificio.findByPk(id)
  if (!edificio) return null
  await edificio.destroy()
  return true
}
