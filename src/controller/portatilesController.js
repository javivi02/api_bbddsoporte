import {
  getPortatilesServices,
  getPortatilesStockServices,
  getPortatilServices
} from '../services/portatilesServices.js'

export const getPortatilesController = async (req, res) => {

  const { stock } = req.query

  if (stock) {
    const portatiles = await getPortatilesStockServices()
    return res.send(portatiles)
  }

  const portatiles = await getPortatilesServices()
  res.send(portatiles)
}

export const getPortatilController = async (req, res) => {
  const { id } = req.params
  const portatil = await getPortatilServices(id)
  res.send(portatil)
}

