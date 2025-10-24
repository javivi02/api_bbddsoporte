import { sequelize } from '../bbdd/dbConnection.js'
import { modeloUsuarios } from '../bbdd/models/Usuarios.js'

const Usuarios = modeloUsuarios(sequelize)

export const getUsuariosServices = async () => {
  return await Usuarios.findAll()
}

export const createUsuariosService = async (data) => {
  return await Usuarios.create(data)
}

export const updateUsuariosService = async (id, data) => {
  const usuario = await Usuarios.findByPk(id)
  if (!usuario) return null
  await usuario.update(data)
  return usuario
}

export const deleteUsuariosService = async (id) => {
  const usuario = await Usuarios.findByPk(id)
  if (!usuario) return null
  await usuario.destroy()
  return true
}
