import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPrestamoTipo } from '../bbdd/models/Prestamo_tipo.js'
import { getPagination, getPagingData } from '../utils/pagination.js'

const Prestamos = modeloPrestamoTipo(sequelize)

export const getPrestamosTipoServices = async () => {
  return await Prestamos.findAll()
}
