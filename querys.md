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


## CONSULTA ESTACIONES DE TRABAJO

`SELECT
Estaciones_trabajo.Estaciones_trabajoID,
Estaciones_trabajo.Identificacion,
Estaciones_trabajo.Direccion_ip,
Estaciones_trabajo.AreaID,
Estaciones_trabajo.Caja,
Estaciones_trabajo.SwitchID,
Estaciones_trabajo.Puerto_Switch,
Estaciones_trabajo.Cpu,
Estaciones_trabajo.Cpu_serie,
Estaciones_trabajo.Cpu_rtve,
Estaciones_trabajo.Monitor,
Estaciones_trabajo.Monitor_serie,
Estaciones_trabajo.Monitor_rtve,
Estaciones_trabajo.Mesa_sonidoID,
Estaciones_trabajo.Mesa_sonido_serie,
Estaciones_trabajo.Observaciones,
Edificio.Edificio,
Planta.Planta,
Areas.Area,
Estaciones_trabajo.Desafectado
FROM Estaciones_trabajo
LEFT OUTER JOIN Areas ON Estaciones_trabajo.AreaID = Areas.AreaID
LEFT OUTER JOIN Edificio ON Areas.EdificioID = Edificio.EdificioID
LEFT OUTER JOIN Planta ON Areas.PlantaID = Planta.PlantaID
ORDER BY Estaciones_trabajo.Estaciones_trabajoID DESC`
