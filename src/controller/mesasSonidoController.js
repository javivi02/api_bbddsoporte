import { getMesasSonidoServices, createMesasSonidoService, updateMesasSonidoService, deleteMesasSonidoService } from '../services/mesasSonidoServices.js'

export const getMesasSonidoController = async (req, res) => {
  const mesasSonido = await getMesasSonidoServices()
  res.send(mesasSonido)
}

export const createMesasSonidoController = async (req, res) => {
  try {
    const data = req.body
    const mesa = await createMesasSonidoService(data)
    res.status(201).send(mesa)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateMesasSonidoController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const mesa = await updateMesasSonidoService(id, data)
    if (!mesa) return res.status(404).send('No encontrado')
    res.send(mesa)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteMesasSonidoController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteMesasSonidoService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
