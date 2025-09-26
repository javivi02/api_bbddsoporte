import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAuricularesPrestamos } from '../bbdd/models/AuricularesPrestamos.js'


const AuricularesPrestamos = modeloAuricularesPrestamos(sequelize)

export const getAuricularesPrestamosServices = async () => {
  return await AuricularesPrestamos.findAll()
}

export const createAuricularesPrestamosService = async (data) => {
  return await AuricularesPrestamos.create(data)
}

export const updateAuricularesPrestamosService = async (id, data) => {
  const prestamo = await AuricularesPrestamos.findByPk(id)
  if (!prestamo) return null
  await prestamo.update(data)
  return prestamo
}

export const deleteAuricularesPrestamosService = async (id) => {
  const prestamo = await AuricularesPrestamos.findByPk(id)
  if (!prestamo) return null
  await prestamo.destroy()
  return true
}
