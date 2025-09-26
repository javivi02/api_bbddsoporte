import { getMiembrosDepartamentoServices, createMiembrosDepartamentoService, updateMiembrosDepartamentoService, deleteMiembrosDepartamentoService } from '../services/miembrosDepartamentoServices.js'

export const getMiembrosDepartamentoController = async (req, res) => {
  const miembrosDepartamento = await getMiembrosDepartamentoServices()
  res.send(miembrosDepartamento)
}

export const createMiembrosDepartamentoController = async (req, res) => {
  try {
    const data = req.body
    const miembro = await createMiembrosDepartamentoService(data)
    res.status(201).send(miembro)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateMiembrosDepartamentoController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const miembro = await updateMiembrosDepartamentoService(id, data)
    if (!miembro) return res.status(404).send('No encontrado')
    res.send(miembro)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteMiembrosDepartamentoController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteMiembrosDepartamentoService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
