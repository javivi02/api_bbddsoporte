import { sequelize } from '../bbdd/dbConnection.js'
import { modeloSwitch } from '../bbdd/models/Switch.js'


const Switch = modeloSwitch(sequelize)

export const getSwitchServices = async () => {
  return await Switch.findAll()
}

export const createSwitchService = async (data) => {
  return await Switch.create(data)
}

export const updateSwitchService = async (id, data) => {
  const sw = await Switch.findByPk(id)
  if (!sw) return null
  await sw.update(data)
  return sw
}

export const deleteSwitchService = async (id) => {
  const sw = await Switch.findByPk(id)
  if (!sw) return null
  await sw.destroy()
  return true
}
