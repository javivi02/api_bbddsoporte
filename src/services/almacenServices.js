import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAlmacen } from '../bbdd/models/Almacen.js'

const Almacen = modeloAlmacen(sequelize)


export const getAlmacenServices = async () => {
  return await Almacen.findAll()
}

export const createAlmacenService = async (data) => {
  return await Almacen.create(data)
}

export const updateAlmacenService = async (id, data) => {
  const almacen = await Almacen.findByPk(id)
  if (!almacen) return null
  await almacen.update(data)
  return almacen
}

export const deleteAlmacenService = async (id) => {
  const almacen = await Almacen.findByPk(id)
  if (!almacen) return null
  await almacen.destroy()
  return true
}
