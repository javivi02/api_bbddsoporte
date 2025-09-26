import { sequelize } from '../bbdd/dbConnection.js'
import { modeloMiembrosDepartamento } from '../bbdd/models/Miembros_departamento.js'


const MiembrosDepartamento = modeloMiembrosDepartamento(sequelize)

export const getMiembrosDepartamentoServices = async () => {
  return await MiembrosDepartamento.findAll()
}

export const createMiembrosDepartamentoService = async (data) => {
  return await MiembrosDepartamento.create(data)
}

export const updateMiembrosDepartamentoService = async (id, data) => {
  const miembro = await MiembrosDepartamento.findByPk(id)
  if (!miembro) return null
  await miembro.update(data)
  return miembro
}

export const deleteMiembrosDepartamentoService = async (id) => {
  const miembro = await MiembrosDepartamento.findByPk(id)
  if (!miembro) return null
  await miembro.destroy()
  return true
}
