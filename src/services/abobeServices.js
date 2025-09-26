import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAbobe } from '../bbdd/models/Abobe.js'

const Abobe = modeloAbobe(sequelize)


export const getAbobeServices = async () => {
  return await Abobe.findAll()
}

export const createAbobeService = async (data) => {
  return await Abobe.create(data)
}

export const updateAbobeService = async (id, data) => {
  const abobe = await Abobe.findByPk(id)
  if (!abobe) return null
  await abobe.update(data)
  return abobe
}

export const deleteAbobeService = async (id) => {
  const abobe = await Abobe.findByPk(id)
  if (!abobe) return null
  await abobe.destroy()
  return true
}
