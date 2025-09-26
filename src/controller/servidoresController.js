import { getServidoresServices, createServidoresService, updateServidoresService, deleteServidoresService } from '../services/servidoresServices.js'

export const getServidoresController = async (req, res) => {
  const servidores = await getServidoresServices()
  res.send(servidores)
}

export const createServidoresController = async (req, res) => {
  try {
    const data = req.body
    const servidor = await createServidoresService(data)
    res.status(201).send(servidor)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateServidoresController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const servidor = await updateServidoresService(id, data)
    if (!servidor) return res.status(404).send('No encontrado')
    res.send(servidor)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteServidoresController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteServidoresService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
