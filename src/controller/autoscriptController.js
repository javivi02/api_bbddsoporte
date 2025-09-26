import { getAutoscriptServices, createAutoscriptService, updateAutoscriptService, deleteAutoscriptService } from '../services/autoscriptServices.js'

export const getAutoscriptController = async (req, res) => {
  const autoscript = await getAutoscriptServices()
  res.send(autoscript)
}

export const createAutoscriptController = async (req, res) => {
  try {
    const data = req.body
    const auto = await createAutoscriptService(data)
    res.status(201).send(auto)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateAutoscriptController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const auto = await updateAutoscriptService(id, data)
    if (!auto) return res.status(404).send('No encontrado')
    res.send(auto)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteAutoscriptController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteAutoscriptService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
