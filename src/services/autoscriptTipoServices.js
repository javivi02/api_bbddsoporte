import { sequelize } from '../bbdd/dbConnection.js'
import { modeloAutoscriptTipo } from '../bbdd/models/Autoscript_tipo.js'

const AutoscriptTipo = modeloAutoscriptTipo(sequelize)


export const getAutoscriptTipoServices = async () => {
  return await AutoscriptTipo.findAll()
}

export const createAutoscriptTipoService = async (data) => {
  return await AutoscriptTipo.create(data)
}

export const updateAutoscriptTipoService = async (id, data) => {
  const autoscriptTipo = await AutoscriptTipo.findByPk(id)
  if (!autoscriptTipo) return null
  await autoscriptTipo.update(data)
  return autoscriptTipo
}

export const deleteAutoscriptTipoService = async (id) => {
  const autoscriptTipo = await AutoscriptTipo.findByPk(id)
  if (!autoscriptTipo) return null
  await autoscriptTipo.destroy()
  return true
}
