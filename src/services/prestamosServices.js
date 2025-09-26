import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPrestamos } from '../bbdd/models/Prestamos.js'

    Prestamos.PrestamosID, 
    Prestamos.PortatilID, 
    Prestamos.Fecha_entrega, 
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
    Prestamos.Observaciones, 
    Portatiles.Portatil, 
    Miembros_departamento.Nombre, 
    Areas.Area, 
    Prestamos.Devolucion_prevista, 
    Prestamos.Control_devolucion 
    FROM Prestamos 
    INNER JOIN Portatiles ON Prestamos.PortatilID = Portatiles.PortatilID 
    LEFT OUTER JOIN Usuarios ON Prestamos.Usuario = Usuarios.Usuario 
    LEFT OUTER JOIN Miembros_departamento ON Usuarios.Matricula_rtve = Miembros_departamento.Matricula_rtve 
    LEFT OUTER JOIN Areas ON Prestamos.AreaID = Areas.AreaID 
    ORDER BY Prestamos.PrestamosID DESC`)

const Prestamos = modeloPrestamos(sequelize)

export const getPrestamosServices = async () => {
  const [results, metadata] = await sequelize.query(`SELECT 
    Prestamos.PrestamosID, 
    Prestamos.PortatilID, 
    Prestamos.Fecha_entrega, 
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
    Prestamos.Observaciones, 
    Portatiles.Portatil, 
    Miembros_departamento.Nombre, 
    Areas.Area, 
    Prestamos.Devolucion_prevista, 
    Prestamos.Control_devolucion 
    FROM Prestamos 
    INNER JOIN Portatiles ON Prestamos.PortatilID = Portatiles.PortatilID 
    LEFT OUTER JOIN Usuarios ON Prestamos.Usuario = Usuarios.Usuario 
    LEFT OUTER JOIN Miembros_departamento ON Usuarios.Matricula_rtve = Miembros_departamento.Matricula_rtve 
    LEFT OUTER JOIN Areas ON Prestamos.AreaID = Areas.AreaID 
    ORDER BY Prestamos.PrestamosID DESC`)
  return results
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

export const getPrestamoServices = async (ID) => {

  const [results, metadata] = await sequelize.query(`SELECT 
    Prestamos.PrestamosID, 
    Prestamos.PortatilID, 
    Prestamos.Fecha_entrega, 
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
    Prestamos.Observaciones, 
    Portatiles.Portatil, 
    Miembros_departamento.Nombre, 
    Areas.Area, 
    Prestamos.Devolucion_prevista, 
    Prestamos.Control_devolucion 
    FROM Prestamos 
    INNER JOIN Portatiles ON Prestamos.PortatilID = Portatiles.PortatilID 
    LEFT OUTER JOIN Usuarios ON Prestamos.Usuario = Usuarios.Usuario 
    LEFT OUTER JOIN Miembros_departamento ON Usuarios.Matricula_rtve = Miembros_departamento.Matricula_rtve 
    LEFT OUTER JOIN Areas ON Prestamos.AreaID = Areas.AreaID 
    WHERE Prestamos.PrestamosID = ${ID} 
    ORDER BY Prestamos.PrestamosID DESC`)

  return results[0]

}