import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPortatiles } from '../bbdd/models/Portatiles.js'

const Portatiles = modeloPortatiles(sequelize)

export const getPortatilesServices = async () => {

  return await Portatiles.findAll()

}

export const getPortatilServices = async (id) => {

  return await Portatiles.findByPk(id)

}