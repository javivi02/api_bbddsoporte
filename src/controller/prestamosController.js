import {
  getPrestamosServices,
  getPrestamosPaginationServices,
  getPrestamoByIdService,
  createPrestamoService,
  updatePrestamoService,
  deletePrestamoService
} from '../services/prestamosServices.js'

export const getPrestamosController = async (req, res) => {
  const prestamos = await getPrestamosServices()
  res.send(prestamos)
}

export const getPrestamosPaginationController = async (req, res) => {
  const { page, perPage, searchWord, condition, condition2, order } = req.query

  try {
    const result = await getPrestamosPaginationServices(page, perPage, searchWord, condition, condition2, order)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getPrestamoByIdController = async (req, res) => {
  try {
    const prestamo = await getPrestamoByIdService(req.params.id)
    if (!prestamo) {
      return res.status(404).json({ error: 'Préstamo no encontrado' })
    }
    res.status(200).json(prestamo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createPrestamoController = async (req, res) => {
  try {
    const prestamo = await createPrestamoService(req.body)
    res.status(201).json(prestamo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updatePrestamoController = async (req, res) => {
  try {
    const prestamo = await updatePrestamoService(req.params.id, req.body)
    if (!prestamo) {
      return res.status(404).json({ error: 'Préstamo no encontrado' })
    }
    res.status(200).json(prestamo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deletePrestamoController = async (req, res) => {
  try {
    const result = await deletePrestamoService(req.params.id)
    if (!result) {
      return res.status(404).json({ error: 'Préstamo no encontrado' })
    }
    res.status(200).json({ message: 'Préstamo eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
