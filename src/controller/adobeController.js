import { getAdobeServices, createAdobeService, updateAdobeService, deleteAdobeService } from '../services/adobeServices.js'

export const getAdobeController = async (req, res) => {
  const adobe = await getAdobeServices()
  res.send(adobe)
}

export const createAdobeController = async (req, res) => {
  const data = req.body
  const adobe = await createAdobeService(data)
  res.status(201).send(adobe)
}

export const updateAdobeController = async (req, res) => {
  const { id } = req.params
  const data = req.body
  const adobe = await updateAdobeService(id, data)
  if (!adobe) return res.status(404).send('No encontrado')
  res.send(adobe)
}

export const deleteAdobeController = async (req, res) => {
  const { id } = req.params
  const deleted = await deleteAdobeService(id)
  if (!deleted) return res.status(404).send('No encontrado')
  res.status(204).send()
}
