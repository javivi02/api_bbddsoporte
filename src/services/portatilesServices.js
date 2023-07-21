import { modeloPortatiles } from '../bbdd/models/Portatiles.js'
import { sequelize } from '../bbdd/dbConnection.js'
import { DataTypes } from 'sequelize'

const Portatiles = modeloPortatiles(sequelize, DataTypes)
export const getPortatilesServices = async () => {

  return await Portatiles.findAll()

}

export const getPortatilServices = async (id) => {

  return await Portatiles.findByPk(id)

}