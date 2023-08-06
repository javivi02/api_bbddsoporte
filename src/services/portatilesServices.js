import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPortatiles } from '../bbdd/models/Portatiles.js'
import { getPagination, getPagingData } from '../utils/pagination.js'

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

  if (!portatil) return 'NO EXISTE EL PORTATIL'

  return Portatiles.update(data, {
    where: {
      PortatilID: id
    }
  })

}

export const getPortatilesPaginationServices = async (page, per_page) => {

  const { limit, offset } = getPagination(page, per_page)

  try {

    const data = await Portatiles.findAndCountAll({ offset, limit })
    return getPagingData(data, page, limit)

  } catch (error) {
    throw new error
  }

}