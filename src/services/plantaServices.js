import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPlanta } from '../bbdd/models/Planta.js'


const Planta = modeloPlanta(sequelize)

export const getPlantaServices = async () => {
  return await Planta.findAll()
}

export const createPlantaService = async (data) => {
  return await Planta.create(data)
}

export const updatePlantaService = async (id, data) => {
  const planta = await Planta.findByPk(id)
  if (!planta) return null
  await planta.update(data)
  return planta
}

export const deletePlantaService = async (id) => {
  const planta = await Planta.findByPk(id)
  if (!planta) return null
  await planta.destroy()
  return true
}
