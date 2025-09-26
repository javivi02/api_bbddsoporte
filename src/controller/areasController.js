import { getAreasServices, createAreasService, updateAreasService, deleteAreasService } from '../services/areasServices.js'

export const getAreasController = async (req, res) => {
  const areas = await getAreasServices()
  res.send(areas)
}

export const createAreasController = async (req, res) => {
  const data = req.body
  const area = await createAreasService(data)
  res.status(201).send(area)
}

export const updateAreasController = async (req, res) => {
  const { id } = req.params
  const data = req.body
  const area = await updateAreasService(id, data)
  if (!area) return res.status(404).send('No encontrado')
  res.send(area)
}

export const deleteAreasController = async (req, res) => {
  const { id } = req.params
  const deleted = await deleteAreasService(id)
  if (!deleted) return res.status(404).send('No encontrado')
  res.status(204).send()
}
