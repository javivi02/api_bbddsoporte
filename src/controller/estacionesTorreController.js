import { getEstacionesTorreServices, createEstacionesTorreService, updateEstacionesTorreService, deleteEstacionesTorreService, getEstacionesTorreUbicacionServices, getEstacionesTorreServicesID, getEstacionesTorreUbicacionPaginacionServices } from '../services/estacionesTorreServices.js'

export const getEstacionesTorreController = async (req, res) => {
  const estacionesTorre = await getEstacionesTorreServices()
  res.send(estacionesTorre)
}

export const getEstacionesTorreControllerID = async (req, res) => {
  try {
    const id = req.params.id
    const est = await getEstacionesTorreServicesID(id)
    if (!est) return res.status(404).send('No encontrado')
    res.send(est)
  } catch (e) {
    res.status(400).send(e.message)
  }

}

export const createEstacionesTorreController = async (req, res) => {
  try {
    const data = req.body
    const est = await createEstacionesTorreService(data)
    res.status(201).send(est)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateEstacionesTorreController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const est = await updateEstacionesTorreService(id, data)
    if (!est) return res.status(404).send('No encontrado')
    res.send(est)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteEstacionesTorreController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteEstacionesTorreService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const getEstacionesTorreUbicacionController = async (req, res) => {
  const estacionesTorreUbicacion = await getEstacionesTorreUbicacionServices()
  res.send(estacionesTorreUbicacion)
}

export const getEstacionesTorreUbicacionControllerPaginacion = async (req, res) => {

const { page, perPage, searchWord, condition } = req.query

  try {
    const result = await getEstacionesTorreUbicacionPaginacionServices(page, perPage, searchWord, condition)
    res.status(200).json({ result })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }


}
