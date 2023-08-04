import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPortatiles } from '../bbdd/models/Portatiles.js'

const Portatiles = modeloPortatiles(sequelize)

export const getPortatilesServices = async () => {

  return await Portatiles.findAll()

}

export const getPortatilesStockServices = async () => {

  const [results, metadata] = await sequelize.query('SELECT\n' +
    'PortatilID,\n' +
    'Portatil,\n' +
    'Pool,\n' +
    'Observaciones,\n' +
    'Modelo\n' +
    'FROM Portatiles\n' +
    'WHERE (PortatilID NOT IN (SELECT PortatilID FROM Prestamos WHERE fecha_devolucion IS null AND PortatilID IS NOT null)) AND (Pool =1) AND (Desafectado=0)\n' +
    'ORDER BY Portatil')

  return results

}

export const getPortatilServices = async (id) => {

  return await Portatiles.findByPk(id)

}

export const getUpdateServices = async (id, data) => {

  const portatil = await Portatiles.findByPk(id)

  if (!portatil) return "NO EXISTE EL PORTATIL"

  return Portatiles.update(data, {
    where: {
      PortatilID: id
    }
  })

}