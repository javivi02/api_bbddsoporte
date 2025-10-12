import { getServidoresServices, createServidoresService, updateServidoresService, deleteServidoresService, getServidoresPaginacionServices, getServidoresServicesCheckDuplicate } from '../services/servidoresServices.js'

export const getServidoresController = async (req, res) => {
  const servidores = await getServidoresServices()
  res.send(servidores)
}

export const createServidoresController = async (req, res) => {
  try {
    const data = req.body
    const servidor = await createServidoresService(data)
    res.status(201).send(servidor)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateServidoresController = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const servidor = await updateServidoresService(id, data)
    if (!servidor) return res.status(404).send('No encontrado')
    res.send(servidor)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const deleteServidoresController = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteServidoresService(id)
    if (!deleted) return res.status(404).send('No encontrado')
    res.send({ success: true })
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const getServidoresControllerPaginacion = async (req, res) => {
  const { page, perPage, searchWord, condition, order } = req.query

  try {
    const result = await getServidoresPaginacionServices({ page, perPage, searchWord, condition, order })
    res.send(result)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const getServidoresControllerCheckDuplicate = async (req, res) => {
  const { value, column } = req.query

  try {
    const result = await getServidoresServicesCheckDuplicate(value, column)
    if (result) {
      return res.status(200).json({ message: 'Registro existente', duplicate: true })
    }
    res.status(200).json({ message: 'No se encontró duplicado', duplicate: false })
  } catch (e) {
    res.status(400).send(e.message)
  }
}
