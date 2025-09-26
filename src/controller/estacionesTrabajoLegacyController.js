import { getEstacionesTrabajoLegacyServices } from '../services/estacionesTrabajoLegacyServices.js'

export const getEstacionesTrabajoLegacyController = async (req, res) => {
  const estacionesTrabajoLegacy = await getEstacionesTrabajoLegacyServices()
  res.send(estacionesTrabajoLegacy)
}
