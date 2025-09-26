import { getPrestamoServices, getPrestamosServices, createPrestamoService, updatePrestamoService, deletePrestamoService } from '../services/prestamosServices.js'

export const getPrestamosController = async (req, res) => {
  const prestamos = await getPrestamosServices()
  res.send(prestamos)
}

export const getPrestamoController = async (req, res) => {
  const { id } = req.params
  const prestamos = await getPrestamoServices(id)
  res.send(prestamos)
}

export const createPrestamoController = async (req, res) => {
  try {
    const data = req.body
    const prestamo = await createPrestamoService(data)
    res.status(201).send(prestamo)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updatePrestamoController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const prestamo = await updatePrestamoService(id, data)
    if (!prestamo) return res.status(404).send('No encontrado')
    res.send(prestamo)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deletePrestamoController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deletePrestamoService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
