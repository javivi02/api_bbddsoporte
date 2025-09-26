import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEstacionesEdicion } from '../bbdd/models/Estaciones _edicion.js'

const EstacionesEdicion = modeloEstacionesEdicion(sequelize)

export const getEstacionesEdicionServices = async () => {
  return await EstacionesEdicion.findAll()
}
