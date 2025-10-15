import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPortatiles } from '../bbdd/models/Portatiles.js'
import { getPagination, getPagingData } from '../utils/pagination.js'

const Portatiles = modeloPortatiles(sequelize)

export const getPortatilesServices = async () => {
  return await Portatiles.findAll()
}

export const getPortatileDelete = async (id) => {
  const portatil = await Portatiles.findByPk(id)

  if (!portatil) return 'NO EXISTE EL PORTATIL'

  return Portatiles.destroy({
    where: {
      PortatilID: id
    }
  })
}

export const getPortatilesStockServices = async () => {
  const [results, metadata] = await sequelize.query('SELECT\n' +
    'PortatilID,\n' +
    'Portatil,\n' +
    'Pool,\n' +
    'Observaciones,\n' +
    'Modelo\n' +
    'FROM Portatiles\n' +
    'WHERE (PortatilID NOT IN (SELECT PortatilID FROM Prestamos WHERE fecha_devolucion IS null AND PortatilID IS NOT null)) AND (Pool =1) AND (Desafectado=0)\n' +
    'ORDER BY Portatil')

  return results
}

export const getPortatilServices = async (id) => {
  return await Portatiles.findByPk(id)
}

export const getUpdateServices = async (id, data) => {
  const portatil = await Portatiles.findByPk(id)

  if (!portatil) return 'NO EXISTE EL PORTATIL'

  return Portatiles.update(data, {
    where: {
      PortatilID: id
    }
  })
}

export const getPortatilesPaginationServices = async ({ page, perPage, searchWord, condition, order = 'PortatilID' }) => {
  const { limit, offset } = getPagination(page, perPage)

  // Configurar búsqueda y condiciones
  const conditions = []
  const replacements = []

  if (searchWord && searchWord.trim() !== '') {
    // Dividir en palabras individuales y filtrar vacías
    const words = searchWord.trim().split(/\s+/).filter(word => word.length > 0)

    // Para cada palabra, crear una condición que busque en todos los campos
    const wordConditions = words.map(word => {
      const searchPattern = `%${word}%`
      // Agregar el patrón 8 veces (una por cada campo)
      replacements.push(...Array(8).fill(searchPattern))

      return `(
        CAST(PortatilID AS CHAR) LIKE ? OR
        Portatil LIKE ? OR
        Modelo LIKE ? OR
        Direccion_ip_torre LIKE ? OR
        Direccion_ip_wireless LIKE ? OR
        Portatil_serie LIKE ? OR
        Portatil_rtve LIKE ? OR
        Observaciones LIKE ?
      )`
    })

    // Unir todas las condiciones de palabras con AND
    // Esto asegura que TODAS las palabras deben aparecer (en cualquier campo)
    conditions.push(wordConditions.join(' AND '))
  }

  if (condition && condition.trim() !== '') {
    conditions.push(`(${condition.trim()})`)
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''

  // Joins compartidos
  const joins = 'FROM Portatiles'

  const baseQuery = `SELECT
    PortatilID,
    Portatil,
    Modelo,
    Direccion_ip_torre,
    Direccion_ip_wireless,
    Portatil_serie,
    Portatil_rtve,
    Observaciones,
    Pool,
    Desafectado,
    Edicion
  ${joins}
  ${whereClause}
    ORDER BY ${order}
    LIMIT ${limit} OFFSET ${offset}`

  const countQuery = `SELECT COUNT(*) as count ${joins} ${whereClause}`

  const [results] = await sequelize.query(baseQuery, {
    replacements: replacements.length > 0 ? replacements : undefined
  })

  const [[{ count: totalItems }]] = await sequelize.query(countQuery, {
    replacements: replacements.length > 0 ? replacements : undefined
  })

  return getPagingData(results, totalItems, page, limit)
}

export const createPortatilService = async (data) => {
  return await Portatiles.create(data)
}

export const deletePortatilService = async (id) => {
  const portatil = await Portatiles.findByPk(id)
  if (!portatil) return null
  await portatil.destroy()
  return true
}
