import { sequelize } from '../bbdd/dbConnection.js'
import { modeloUbicacion } from '../bbdd/models/Ubicacion.js'


const Ubicacion = modeloUbicacion(sequelize)

export const getUbicacionServices = async () => {
  return await Ubicacion.findAll()
}

export const createUbicacionService = async (data) => {
  return await Ubicacion.create(data)
}

export const updateUbicacionService = async (id, data) => {
  const ubicacion = await Ubicacion.findByPk(id)
  if (!ubicacion) return null
  await ubicacion.update(data)
  return ubicacion
}

export const deleteUbicacionService = async (id) => {
  const ubicacion = await Ubicacion.findByPk(id)
  if (!ubicacion) return null
  await ubicacion.destroy()
  return true
}
