import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAdobe } from '../bbdd/models/Adobe.js'

const Adobe = modeloAdobe(sequelize)


export const getAdobeServices = async () => {
  return await Adobe.findAll()
}

export const createAdobeService = async (data) => {
  return await Adobe.create(data)
}

export const updateAdobeService = async (id, data) => {
  const adobe = await Adobe.findByPk(id)
  if (!adobe) return null
  await adobe.update(data)
  return adobe
}

export const deleteAdobeService = async (id) => {
  const adobe = await Adobe.findByPk(id)
  if (!adobe) return null
  await adobe.destroy()
  return true
}
