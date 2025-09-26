import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEstacionesTrabajoLegacy } from '../bbdd/models/Estaciones _trabajo.js'

const EstacionesTrabajoLegacy = modeloEstacionesTrabajoLegacy(sequelize)

export const getEstacionesTrabajoLegacyServices = async () => {
  return await EstacionesTrabajoLegacy.findAll()
}
