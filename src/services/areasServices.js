import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAreas } from '../bbdd/models/Areas.js'

const Areas = modeloAreas(sequelize)


export const getAreasServices = async () => {
  return await Areas.findAll()
}

export const createAreasService = async (data) => {
  return await Areas.create(data)
}

export const updateAreasService = async (id, data) => {
  const area = await Areas.findByPk(id)
  if (!area) return null
  await area.update(data)
  return area
}

export const deleteAreasService = async (id) => {
  const area = await Areas.findByPk(id)
  if (!area) return null
  await area.destroy()
  return true
}
