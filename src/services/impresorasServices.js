import { sequelize } from '../bbdd/dbConnection.js'
import { modeloImpresoras } from '../bbdd/models/Impresoras.js'

const Impresoras = modeloImpresoras(sequelize)

export const getImpresorasServices = async () => {
  return await Impresoras.findAll()
}

export const createImpresorasService = async (data) => {
  return await Impresoras.create(data)
}

export const updateImpresorasService = async (id, data) => {
  const impresora = await Impresoras.findByPk(id)
  if (!impresora) return null
  await impresora.update(data)
  return impresora
}

export const deleteImpresorasService = async (id) => {
  const impresora = await Impresoras.findByPk(id)
  if (!impresora) return null
  await impresora.destroy()
  return true
}
