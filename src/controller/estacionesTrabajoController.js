import { getEstacionesTrabajoServices, createEstacionesTrabajoService, updateEstacionesTrabajoService, deleteEstacionesTrabajoService } from '../services/estacionesTrabajoServices.js'

export const getEstacionesTrabajoController = async (req, res) => {
  const portatiles = await getEstacionesTrabajoServices()
  res.send(portatiles)
}

export const createEstacionesTrabajoController = async (req, res) => {
  try {
    const data = req.body
    const est = await createEstacionesTrabajoService(data)
    res.status(201).send(est)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateEstacionesTrabajoController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const est = await updateEstacionesTrabajoService(id, data)
    if (!est) return res.status(404).send('No encontrado')
    res.send(est)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteEstacionesTrabajoController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteEstacionesTrabajoService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}



