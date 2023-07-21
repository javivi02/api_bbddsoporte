import { getPortatilesServices, getPortatilServices } from '../services/portatilesServices.js'

export const getPortatiles = async (req, res) => {
  const portatiles = await getPortatilesServices()
  res.send(portatiles)
}

export const getPortatil = async (req, res) => {
  const { id } = req.params
  const portatil = await getPortatilServices(id)
  res.send(portatil)
}