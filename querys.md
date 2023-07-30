## CONSULTA PRESTAMOS

`SELECT
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
ORDER BY Prestamos.PrestamosID DESC`

## CONSULTA PORTATILES STOCK

`SELECT
PortatilID,
Portatil,
Pool,
Observaciones,
Modelo
FROM Portatiles
WHERE (PortatilID NOT IN (SELECT PortatilID FROM Prestamos WHERE fecha_devolucion IS null AND PortatilID IS NOT null)) AND (Pool =1) AND (Desafectado=0)
ORDER BY Portatil`


## CONSULTA PORTATILES NO DEVUELTOS

`SELECT
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
DATEDIFF(now(), Devolucion_prevista) AS exceso_prestamo,
Portatiles.Portatil,
Prestamos.Devolucion_prevista,
Prestamos.Control_devolucion,
Areas.Area
FROM Prestamos
INNER JOIN Portatiles ON Prestamos.PortatilID = Portatiles.PortatilID
LEFT OUTER JOIN Areas ON Prestamos.AreaID = Areas.AreaID
WHERE (Prestamos.Fecha_devolucion IS NULL)
ORDER BY Prestamos.PrestamosID DESC`

