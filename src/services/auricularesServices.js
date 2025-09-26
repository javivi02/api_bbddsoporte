import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAuriculares } from '../bbdd/models/Auriculares.js'

const Auriculares = modeloAuriculares(sequelize)


export const getAuricularesServices = async () => {
  return await Auriculares.findAll()
}

export const createAuricularesService = async (data) => {
  return await Auriculares.create(data)
}

export const updateAuricularesService = async (id, data) => {
  const auricular = await Auriculares.findByPk(id)
  if (!auricular) return null
  await auricular.update(data)
  return auricular
}

export const deleteAuricularesService = async (id) => {
  const auricular = await Auriculares.findByPk(id)
  if (!auricular) return null
  await auricular.destroy()
  return true
}
