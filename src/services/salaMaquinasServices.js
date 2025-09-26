import { sequelize } from '../bbdd/dbConnection.js'
import { modeloSalaMaquinas } from '../bbdd/models/Sala_maquinas.js'


const SalaMaquinas = modeloSalaMaquinas(sequelize)

export const getSalaMaquinasServices = async () => {
  return await SalaMaquinas.findAll()
}

export const createSalaMaquinasService = async (data) => {
  return await SalaMaquinas.create(data)
}

export const updateSalaMaquinasService = async (id, data) => {
  const sala = await SalaMaquinas.findByPk(id)
  if (!sala) return null
  await sala.update(data)
  return sala
}

export const deleteSalaMaquinasService = async (id) => {
  const sala = await SalaMaquinas.findByPk(id)
  if (!sala) return null
  await sala.destroy()
  return true
}
