import { getSwitchServices, createSwitchService, updateSwitchService, deleteSwitchService } from '../services/switchServices.js'

export const getSwitchController = async (req, res) => {
  const switches = await getSwitchServices()
  res.send(switches)
}

export const createSwitchController = async (req, res) => {
  try {
    const data = req.body
    const sw = await createSwitchService(data)
    res.status(201).send(sw)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateSwitchController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const sw = await updateSwitchService(id, data)
    if (!sw) return res.status(404).send('No encontrado')
    res.send(sw)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteSwitchController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteSwitchService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
