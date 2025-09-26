import { getEdificioServices, createEdificioService, updateEdificioService, deleteEdificioService } from '../services/edificioServices.js'

export const getEdificioController = async (req, res) => {
  const edificio = await getEdificioServices()
  res.send(edificio)
}

export const createEdificioController = async (req, res) => {
  try {
    const data = req.body
    const edificio = await createEdificioService(data)
    res.status(201).send(edificio)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateEdificioController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const edificio = await updateEdificioService(id, data)
    if (!edificio) return res.status(404).send('No encontrado')
    res.send(edificio)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteEdificioController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteEdificioService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
