import { getDesafectadosServices, createDesafectadosService, updateDesafectadosService, deleteDesafectadosService } from '../services/desafectadosServices.js'

export const getDesafectadosController = async (req, res) => {
  const desafectados = await getDesafectadosServices()
  res.send(desafectados)
}

export const createDesafectadosController = async (req, res) => {
  try {
    const data = req.body
    const desafectado = await createDesafectadosService(data)
    res.status(201).send(desafectado)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateDesafectadosController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const desafectado = await updateDesafectadosService(id, data)
    if (!desafectado) return res.status(404).send('No encontrado')
    res.send(desafectado)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteDesafectadosController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteDesafectadosService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
