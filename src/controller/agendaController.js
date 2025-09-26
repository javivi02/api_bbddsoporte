import { getAgendaServices, createAgendaService, updateAgendaService, deleteAgendaService } from '../services/agendaServices.js'

export const getAgendaController = async (req, res) => {
  const agenda = await getAgendaServices()
  res.send(agenda)
}

export const createAgendaController = async (req, res) => {
  const data = req.body
  const agenda = await createAgendaService(data)
  res.status(201).send(agenda)
}

export const updateAgendaController = async (req, res) => {
  const { id } = req.params
  const data = req.body
  const agenda = await updateAgendaService(id, data)
  if (!agenda) return res.status(404).send('No encontrado')
  res.send(agenda)
}

export const deleteAgendaController = async (req, res) => {
  const { id } = req.params
  const deleted = await deleteAgendaService(id)
  if (!deleted) return res.status(404).send('No encontrado')
  res.status(204).send()
}
