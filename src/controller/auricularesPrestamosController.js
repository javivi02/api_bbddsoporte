import { getAuricularesPrestamosServices, createAuricularesPrestamosService, updateAuricularesPrestamosService, deleteAuricularesPrestamosService } from '../services/auricularesPrestamosServices.js'

export const getAuricularesPrestamosController = async (req, res) => {
  const auricularesPrestamos = await getAuricularesPrestamosServices()
  res.send(auricularesPrestamos)
}

export const createAuricularesPrestamosController = async (req, res) => {
  try {
    const data = req.body
    const prestamo = await createAuricularesPrestamosService(data)
    res.status(201).send(prestamo)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateAuricularesPrestamosController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const prestamo = await updateAuricularesPrestamosService(id, data)
    if (!prestamo) return res.status(404).send('No encontrado')
    res.send(prestamo)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteAuricularesPrestamosController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteAuricularesPrestamosService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
