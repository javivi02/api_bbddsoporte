import { sequelize } from '../bbdd/dbConnection.js'
import { modeloMesasSonido } from '../bbdd/models/Mesas_sonido.js'


const MesasSonido = modeloMesasSonido(sequelize)

export const getMesasSonidoServices = async () => {
  return await MesasSonido.findAll()
}

export const createMesasSonidoService = async (data) => {
  return await MesasSonido.create(data)
}

export const updateMesasSonidoService = async (id, data) => {
  const mesa = await MesasSonido.findByPk(id)
  if (!mesa) return null
  await mesa.update(data)
  return mesa
}

export const deleteMesasSonidoService = async (id) => {
  const mesa = await MesasSonido.findByPk(id)
  if (!mesa) return null
  await mesa.destroy()
  return true
}
