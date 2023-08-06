import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEstacionesTrabajo} from '../bbdd/models/EstacionesTrabajo.js'

const estacionesTrabajo = modeloEstacionesTrabajo(sequelize)

export const getEstacionesTrabajoServices = async () => {

  return await estacionesTrabajo.findAll()

}
