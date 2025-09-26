import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAgenda } from '../bbdd/models/Agenda.js'

const Agenda = modeloAgenda(sequelize)


export const getAgendaServices = async () => {
  return await Agenda.findAll()
}

export const createAgendaService = async (data) => {
  return await Agenda.create(data)
}

export const updateAgendaService = async (id, data) => {
  const agenda = await Agenda.findByPk(id)
  if (!agenda) return null
  await agenda.update(data)
  return agenda
}

export const deleteAgendaService = async (id) => {
  const agenda = await Agenda.findByPk(id)
  if (!agenda) return null
  await agenda.destroy()
  return true
}
