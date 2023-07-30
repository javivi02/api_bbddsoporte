import { getPrestamoServices, getPrestamosServices } from '../services/prestamosServices.js'

export const getPrestamosController = async (req, res) => {
  const prestamos = await getPrestamosServices()
  res.send(prestamos)
}

export const getPrestamoController = async (req, res) => {
  const { id } = req.params
  const prestamos = await getPrestamoServices(id)
  res.send(prestamos)
}
