import { getAutoscriptTipoServices, createAutoscriptTipoService, updateAutoscriptTipoService, deleteAutoscriptTipoService } from '../services/autoscriptTipoServices.js'

export const getAutoscriptTipoController = async (req, res) => {
  const autoscriptTipo = await getAutoscriptTipoServices()
  res.send(autoscriptTipo)
}

export const createAutoscriptTipoController = async (req, res) => {
  const data = req.body
  const autoscriptTipo = await createAutoscriptTipoService(data)
  res.status(201).send(autoscriptTipo)
}

export const updateAutoscriptTipoController = async (req, res) => {
  const { id } = req.params
  const data = req.body
  const autoscriptTipo = await updateAutoscriptTipoService(id, data)
  if (!autoscriptTipo) return res.status(404).send('No encontrado')
  res.send(autoscriptTipo)
}

export const deleteAutoscriptTipoController = async (req, res) => {
  const { id } = req.params
  const deleted = await deleteAutoscriptTipoService(id)
  if (!deleted) return res.status(404).send('No encontrado')
  res.status(204).send()
}
