import { getUbicacionServices, createUbicacionService, updateUbicacionService, deleteUbicacionService } from '../services/ubicacionServices.js'

export const getUbicacionController = async (req, res) => {
  const ubicacion = await getUbicacionServices()
  res.send(ubicacion)
}

export const createUbicacionController = async (req, res) => {
  try {
    const data = req.body
    const ubicacion = await createUbicacionService(data)
    res.status(201).send(ubicacion)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateUbicacionController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const ubicacion = await updateUbicacionService(id, data)
    if (!ubicacion) return res.status(404).send('No encontrado')
    res.send(ubicacion)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteUbicacionController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteUbicacionService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
