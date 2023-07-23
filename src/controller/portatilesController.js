import { getPortatilesServices, getPortatilServices } from '../services/portatilesServices.js'

export const getPortatilesController = async (req, res) => {
  console.log(req.user)
  const portatiles = await getPortatilesServices()
  res.send(portatiles)
}

export const getPortatilController = async (req, res) => {
  const { id } = req.params
  const portatil = await getPortatilServices(id)
  res.send(portatil)
}