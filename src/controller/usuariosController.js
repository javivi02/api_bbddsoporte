import { getUsuariosServices, createUsuariosService, updateUsuariosService, deleteUsuariosService } from '../services/usuariosServices.js'

export const getUsuariosController = async (req, res) => {
  const usuarios = await getUsuariosServices()
  res.send(usuarios)
}

export const createUsuariosController = async (req, res) => {
  try {
    const data = req.body
    const usuario = await createUsuariosService(data)
    res.status(201).send(usuario)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateUsuariosController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const usuario = await updateUsuariosService(id, data)
    if (!usuario) return res.status(404).send('No encontrado')
    res.send(usuario)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteUsuariosController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteUsuariosService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
