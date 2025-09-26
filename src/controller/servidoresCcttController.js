import { getServidoresCcttServices, createServidoresCcttService, updateServidoresCcttService, deleteServidoresCcttService } from '../services/servidoresCcttServices.js'

export const getServidoresCcttController = async (req, res) => {
  const servidoresCctt = await getServidoresCcttServices()
  res.send(servidoresCctt)
}

export const createServidoresCcttController = async (req, res) => {
  try {
    const data = req.body
    const servidor = await createServidoresCcttService(data)
    res.status(201).send(servidor)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateServidoresCcttController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const servidor = await updateServidoresCcttService(id, data)
    if (!servidor) return res.status(404).send('No encontrado')
    res.send(servidor)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteServidoresCcttController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteServidoresCcttService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
