import { getPrestamosServices } from '../services/prestamosServices.js'

export const getPrestamosController = async (req, res) => {
  const prestamos = await getPrestamosServices()
  res.send(prestamos)
}
