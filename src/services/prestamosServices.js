import { sequelize } from '../bbdd/dbConnection.js'
import { modeloPrestamos } from '../bbdd/models/Prestamos.js'

const Prestamos = modeloPrestamos(sequelize)

export const getPrestamosServices = async () => {

  const [results, metadata] = await sequelize.query('SELECT\n' +
    'Prestamos.PrestamosID,\n' +
    'Prestamos.PortatilID,\n' +
    'Prestamos.Fecha_entrega,\n' +
    'Prestamos.Fecha_devolucion,\n' +
    'Prestamos.Entregado_a,\n' +
    'Prestamos.Telefono,\n' +
    'Prestamos.Email,\n' +
    'Prestamos.AreaID,\n' +
    'Prestamos.Motivo,\n' +
    'Prestamos.Umts,\n' +
    'Prestamos.Alimentacion,\n' +
    'Prestamos.Cable_red,\n' +
    'Prestamos.Raton,\n' +
    'Prestamos.Usuario,\n' +
    'Prestamos.Observaciones,\n' +
    'Portatiles.Portatil,\n' +
    'Miembros_departamento.Nombre,\n' +
    'Areas.Area,\n' +
    'Prestamos.Devolucion_prevista,\n' +
    'Prestamos.Control_devolucion\n' +
    'FROM Prestamos\n' +
    'INNER JOIN Portatiles ON Prestamos.PortatilID = Portatiles.PortatilID\n' +
    'LEFT OUTER JOIN Usuarios ON Prestamos.Usuario = Usuarios.Usuario\n' +
    'LEFT OUTER JOIN Miembros_departamento ON Usuarios.Matricula_rtve = Miembros_departamento.Matricula_rtve\n' +
    'LEFT OUTER JOIN Areas ON Prestamos.AreaID = Areas.AreaID\n' +
    'ORDER BY Prestamos.PrestamosID DESC')

  return results

}