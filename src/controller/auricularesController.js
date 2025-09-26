import { getAuricularesServices, createAuricularesService, updateAuricularesService, deleteAuricularesService } from '../services/auricularesServices.js'

export const getAuricularesController = async (req, res) => {
  const auriculares = await getAuricularesServices()
  res.send(auriculares)
}

export const createAuricularesController = async (req, res) => {
  const data = req.body
  const auricular = await createAuricularesService(data)
  res.status(201).send(auricular)
}

export const updateAuricularesController = async (req, res) => {
  const { id } = req.params
  const data = req.body
  const auricular = await updateAuricularesService(id, data)
  if (!auricular) return res.status(404).send('No encontrado')
  res.send(auricular)
}

export const deleteAuricularesController = async (req, res) => {
  const { id } = req.params
  const deleted = await deleteAuricularesService(id)
  if (!deleted) return res.status(404).send('No encontrado')
  res.status(204).send()
}
