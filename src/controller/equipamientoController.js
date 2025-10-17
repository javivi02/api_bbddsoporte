import {
  getEquipamientoPaginationServices,
  createEquipamientoService,
  getEquipamientosServices,
  deleteEquipamientoService,
  getEquipamientosStockServices,
  getEquipamientoServices,
  getEquipamientoUpdateServices
} from '../services/equipamientoServices.js'
export const createEquipamientoController = async (req, res) => {
  try {
    const data = req.body
    const equipamiento = await createEquipamientoService(data)
    res.status(201).send(equipamiento)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteEquipamientoController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteEquipamientoService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const getEquipamientosController = async (req, res) => {
  const { stock } = req.query

  if (stock) {
    const equipamientos = await getEquipamientosStockServices()
    return res.send(equipamientos)
  }

  const equipamientos = await getEquipamientosServices()
  res.send(equipamientos)
}

export const getEquipamientoController = async (req, res) => {
  const { id } = req.params
  const equipamiento = await getEquipamientoServices(id)
  res.send(equipamiento)
}

export const getEquipamientoUpdateController = async (req, res) => {
  const { id } = req.params
  const data = req.body

  const equipamiento = await getEquipamientoUpdateServices(id, data)
  res.send(equipamiento)
}

export const getEquipamientosControllerPaginacion = async (req, res) => {
  const { page, perPage, searchWord, condition, order } = req.query

  try {
    const result = await getEquipamientoPaginationServices({ page, perPage, searchWord, condition, order })
    res.send(result)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const getEquipamientosStockController = async (req, res) => {
  const equipamientos = await getEquipamientosStockServices()
  res.send(equipamientos)
}
