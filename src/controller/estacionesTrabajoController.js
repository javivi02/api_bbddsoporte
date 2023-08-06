import { getEstacionesTrabajoServices } from '../services/estacionesTrabajoServices.js'

export const getEstacionesTrabajoController = async (req, res) => {

  const portatiles = await getEstacionesTrabajoServices()
  res.send(portatiles)
}



