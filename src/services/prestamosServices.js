import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPrestamos } from '../bbdd/models/Prestamos.js'
import { getPagination, getPagingData } from '../utils/pagination.js'

const Prestamos = modeloPrestamos(sequelize)

export const getPrestamosServices = async () => {
  const [results, metadata] = await sequelize.query(`SELECT PrestamosID,
       Prestamo_tipo.Nombre,
       Equipamiento.Nombre,
       Fecha_entrega,
       Devolucion_prevista,
       Fecha_devolucion,
       Entregado_a,
       Telefono,
       Email,
       AreaID,
       Motivo,
       Prestamos.Observaciones,
       Usuario_soporte
      FROM Prestamos
      INNER JOIN Prestamo_tipo ON Prestamos.Prestamo_tipoID = Prestamo_tipo.Prestamo_tipoID
      INNER JOIN Equipamiento ON Prestamos.EquipamientoID = Equipamiento.EquipamientoID
      ORDER BY PrestamosID DESC`)

  return results
}

export const getPrestamosPaginationServices = async (page, perPage, searchWord, condition, order = 'Prestamos.Fecha_entrega DESC') => {
  const { limit, offset } = getPagination(page, perPage)
  console.log(page, perPage, searchWord, condition, order)

  // Configurar búsqueda y condiciones
  const conditions = []
  const replacements = []

  if (searchWord && searchWord.trim() !== '') {
    // Dividir en palabras individuales y filtrar vacías
    const words = searchWord.trim().split(/\s+/).filter(word => word.length > 0)

    // Para cada palabra, crear una condición que busque en todos los campos
    const wordConditions = words.map(word => {
      const searchPattern = `%${word}%`
      // Agregar el patrón 14 veces (una por cada campo)
      replacements.push(...Array(14).fill(searchPattern))

      return `(
        CAST(Prestamos.PrestamosID AS CHAR) LIKE ? OR
        CAST(Prestamos.PortatilID AS CHAR) LIKE ? OR
        Prestamos.Fecha_entrega LIKE ? OR
        Prestamos.Devolucion_prevista LIKE ? OR
        Prestamos.Fecha_devolucion LIKE ? OR
        Prestamos.Entregado_a LIKE ? OR
        Prestamos.Telefono LIKE ? OR
        Prestamos.Email LIKE ? OR
        Prestamos.Usuario LIKE ? OR
        Miembros_departamento.Nombre LIKE ? OR
        Areas.Area LIKE ? OR
        Prestamos.Motivo LIKE ? OR
        Prestamos.Observaciones LIKE ? OR
        Portatiles.Portatil LIKE ?
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
  const joins = `FROM Prestamos
    INNER JOIN Portatiles ON Prestamos.PortatilID = Portatiles.PortatilID
    LEFT OUTER JOIN Usuarios ON Prestamos.Usuario = Usuarios.Usuario
    LEFT OUTER JOIN Miembros_departamento ON Usuarios.Matricula_rtve = Miembros_departamento.Matricula_rtve
    LEFT OUTER JOIN Areas ON Prestamos.AreaID = Areas.AreaID`

  const baseQuery = `SELECT
    Prestamos.PrestamosID,
    Prestamos.PortatilID,
    Prestamos.Fecha_entrega,
    Prestamos.Devolucion_prevista,
    Prestamos.Fecha_devolucion,
    Prestamos.Entregado_a,
    Prestamos.Telefono,
    Prestamos.Email,
    Prestamos.AreaID,
    Prestamos.Motivo,
    Prestamos.Umts,
    Prestamos.Alimentacion,
    Prestamos.Cable_red,
    Prestamos.Raton,
    Prestamos.Usuario,
    Prestamos.Control_devolucion,
    Prestamos.Observaciones
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

export const getPrestamoByIdService = async (id) => {
  return await Prestamos.findByPk(id)
}

export const createPrestamoService = async (data) => {
  return await Prestamos.create(data)
}

export const updatePrestamoService = async (id, data) => {
  const prestamo = await Prestamos.findByPk(id)
  if (!prestamo) return null
  await prestamo.update(data)
  return prestamo
}

export const deletePrestamoService = async (id) => {
  const prestamo = await Prestamos.findByPk(id)
  if (!prestamo) return null
  await prestamo.destroy()
  return true
}
