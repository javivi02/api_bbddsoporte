import { getImpresorasServices, createImpresorasService, updateImpresorasService, deleteImpresorasService } from '../services/impresorasServices.js'

export const getImpresorasController = async (req, res) => {
  const impresoras = await getImpresorasServices()
  res.send(impresoras)
}

export const createImpresorasController = async (req, res) => {
  try {
    const data = req.body
    const impresora = await createImpresorasService(data)
    res.status(201).send(impresora)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateImpresorasController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const impresora = await updateImpresorasService(id, data)
    if (!impresora) return res.status(404).send('No encontrado')
    res.send(impresora)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteImpresorasController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteImpresorasService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
