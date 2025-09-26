import { getSalaMaquinasServices, createSalaMaquinasService, updateSalaMaquinasService, deleteSalaMaquinasService } from '../services/salaMaquinasServices.js'

export const getSalaMaquinasController = async (req, res) => {
  const salaMaquinas = await getSalaMaquinasServices()
  res.send(salaMaquinas)
}

export const createSalaMaquinasController = async (req, res) => {
  try {
    const data = req.body
    const sala = await createSalaMaquinasService(data)
    res.status(201).send(sala)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateSalaMaquinasController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const sala = await updateSalaMaquinasService(id, data)
    if (!sala) return res.status(404).send('No encontrado')
    res.send(sala)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteSalaMaquinasController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteSalaMaquinasService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
