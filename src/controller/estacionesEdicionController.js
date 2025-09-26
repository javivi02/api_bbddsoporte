import { getEstacionesEdicionServices } from '../services/estacionesEdicionServices.js'

export const getEstacionesEdicionController = async (req, res) => {
  const estacionesEdicion = await getEstacionesEdicionServices()
  res.send(estacionesEdicion)
}
