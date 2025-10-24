import { sequelize } from '../bbdd/dbConnection.js'
import { modeloEquipamiento } from '../bbdd/models/Equipamiento.js'
import { getPagination, getPagingData } from '../utils/pagination.js'

const Equipamiento = modeloEquipamiento(sequelize)

export const getEquipamientosServices = async () => {
  return await Equipamiento.findAll()
}

export const getEquipamientosStockServices = async () => {
  const [results, metadata] = await sequelize.query(`SELECT
    EquipamientoID,
    Equipamiento_tipo.nombre as Tipo,
    Equipamiento.Nombre,
    Modelo,
    Numero_serie,
    Numero_rtve,
    Observaciones,
    Modelo,
    Desafectado,
    Pool
    FROM Equipamiento
    INNER JOIN Equipamiento_tipo ON Equipamiento.Equipamiento_tipoID = Equipamiento_tipo.Equipamiento_tipoID
    WHERE (EquipamientoID NOT IN (SELECT EquipamientoID FROM Prestamos WHERE fecha_devolucion IS null AND EquipamientoID IS NOT null)) AND (Pool =1) AND (Desafectado=0)
    ORDER BY EquipamientoID ASC;`)
  return results
}

export const getEquipamientoServices = async (id) => {
  return await Equipamiento.findByPk(id)
}

export const getEquipamientoUpdateServices = async (id, data) => {
  const equipamiento = await Equipamiento.findByPk(id)

  if (!equipamiento) return 'NO EXISTE EL EQUIPAMIENTO'

  return Equipamiento.update(data, {
    where: {
      EquipamientoID: id
    }
  })
}

export const getEquipamientoPaginationServices = async ({ page, perPage, searchWord, condition, order = 'EquipamientoID' }) => {
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
      replacements.push(...Array(9).fill(searchPattern))

      return `(
        Equipamiento_tipo.nombre LIKE ? OR
        Equipamiento.Nombre LIKE ? OR
        Modelo LIKE ? OR
        Numero_serie LIKE ? OR
        Numero_rtve LIKE ? OR
        Observaciones LIKE ? OR
        Modelo LIKE ? OR
        Desafectado LIKE ? OR
        Pool LIKE ?
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
  const joins = `FROM Equipamiento
    INNER JOIN Equipamiento_tipo ON Equipamiento.Equipamiento_tipoID = Equipamiento_tipo.Equipamiento_tipoID`

  const baseQuery = `SELECT
    EquipamientoID,
    Equipamiento_tipo.nombre as Tipo,
    Equipamiento.Nombre,
    Modelo,
    Numero_serie,
    Numero_rtve,
    Observaciones,
    Modelo,
    Desafectado,
    Pool
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

export const createEquipamientoService = async (data) => {
  return await Equipamiento.create(data)
}

export const deleteEquipamientoService = async (id) => {
  const equipamiento = await Equipamiento.findByPk(id)
  if (!equipamiento) return null
  await equipamiento.destroy()
  return true
}
