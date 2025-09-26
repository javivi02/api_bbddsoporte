import { getAbobeServices, createAbobeService, updateAbobeService, deleteAbobeService } from '../services/abobeServices.js'

export const getAbobeController = async (req, res) => {
  const abobe = await getAbobeServices()
  res.send(abobe)
}

export const createAbobeController = async (req, res) => {
  const data = req.body
  const abobe = await createAbobeService(data)
  res.status(201).send(abobe)
}

export const updateAbobeController = async (req, res) => {
  const { id } = req.params
  const data = req.body
  const abobe = await updateAbobeService(id, data)
  if (!abobe) return res.status(404).send('No encontrado')
  res.send(abobe)
}

export const deleteAbobeController = async (req, res) => {
  const { id } = req.params
  const deleted = await deleteAbobeService(id)
  if (!deleted) return res.status(404).send('No encontrado')
  res.status(204).send()
}
