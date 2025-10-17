import {
  getPrestamosTipoServices
} from '../services/prestamosTipoServices.js'

export const getPrestamosTipoController = async (req, res) => {
  const prestamos = await getPrestamosTipoServices()
  res.send(prestamos)
}
