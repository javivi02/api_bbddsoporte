import { getAlmacenServices, createAlmacenService, updateAlmacenService, deleteAlmacenService } from '../services/almacenServices.js'

export const getAlmacenController = async (req, res) => {
  const almacen = await getAlmacenServices()
  res.send(almacen)
}

export const createAlmacenController = async (req, res) => {
  const data = req.body
  const almacen = await createAlmacenService(data)
  res.status(201).send(almacen)
}

export const updateAlmacenController = async (req, res) => {
  const { id } = req.params
  const data = req.body
  const almacen = await updateAlmacenService(id, data)
  if (!almacen) return res.status(404).send('No encontrado')
  res.send(almacen)
}

export const deleteAlmacenController = async (req, res) => {
  const { id } = req.params
  const deleted = await deleteAlmacenService(id)
  if (!deleted) return res.status(404).send('No encontrado')
  res.status(204).send()
}
