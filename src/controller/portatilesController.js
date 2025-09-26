
import {
  getPortatilesPaginationServices,
  getPortatilesServices,
  getPortatilesStockServices,
  getPortatilServices, getUpdateServices, getPortatileDelete
} from '../services/portatilesServices.js'
export const createPortatilController = async (req, res) => {
  try {
    const data = req.body
    const portatil = await createPortatilService(data)
    res.status(201).send(portatil)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deletePortatilController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deletePortatilService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}

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

export const getPortatilUpdateController = async (req, res) => {
  const { id } = req.params
  const data = req.body

  const portatil = await getUpdateServices(id, data)
  res.send(portatil)
}

export const getPortatilesPaginationController = async (req, res) => {
  const { page, per_page } = req.query

  try {
    const portatiles = await getPortatilesPaginationServices(page, per_page)
    res.send(portatiles)
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Ocurrio un error al intentar obtener los portatiles'
    })
  }
}

export const getPortatilDelete = async (req, res) => {
  const { id } = req.params
  const response = await getPortatileDelete(id)
  res.send({ message: response || 'Portatil eliminado correctamente' })
}
