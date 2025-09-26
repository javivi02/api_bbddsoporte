import { getPlantaServices, createPlantaService, updatePlantaService, deletePlantaService } from '../services/plantaServices.js'

export const getPlantaController = async (req, res) => {
  const planta = await getPlantaServices()
  res.send(planta)
}

export const createPlantaController = async (req, res) => {
  try {
    const data = req.body
    const planta = await createPlantaService(data)
    res.status(201).send(planta)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updatePlantaController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const planta = await updatePlantaService(id, data)
    if (!planta) return res.status(404).send('No encontrado')
    res.send(planta)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deletePlantaController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deletePlantaService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
