var DataTypes = require("sequelize").DataTypes;
var _Abobe = require("./Abobe");
var _Agenda = require("./Agenda");
var _Almacen = require("./Almacen");
var _Areas = require("./Areas");
var _Auriculares = require("./Auriculares");
var _AuricularesPrestamos = require("./AuricularesPrestamos");
var _Autoscript = require("./Autoscript");
var _Autoscript_tipo = require("./Autoscript_tipo");
var _Desafectados = require("./Desafectados");
var _Edificio = require("./Edificio");
var _Estaciones _edicion = require("./Estaciones _edicion");
var _Estaciones _trabajo = require("./Estaciones _trabajo");
var _Estaciones_torre = require("./Estaciones_torre");
var _Impresoras = require("./Impresoras");
var _Mesas_sonido = require("./Mesas_sonido");
var _Miembros_departamento = require("./Miembros_departamento");
var _Planta = require("./Planta");
var _Portatiles = require("./Portatiles");
var _Prestamos = require("./Prestamos");
var _Sala_maquinas = require("./Sala_maquinas");
var _Servidores = require("./Servidores");
var _Servidores_cctt = require("./Servidores_cctt");
var _Switch = require("./Switch");
var _Ubicacion = require("./Ubicacion");
var _Umts = require("./Umts");
var _Usuarios = require("./Usuarios");
var _bbdd_soporte_audit = require("./bbdd_soporte_audit");
var _bbdd_soporte_locking = require("./bbdd_soporte_locking");
var _bbdd_soporte_settings = require("./bbdd_soporte_settings");
var _bbdd_soporte_uggroups = require("./bbdd_soporte_uggroups");
var _bbdd_soporte_ugmembers = require("./bbdd_soporte_ugmembers");
var _bbdd_soporte_ugrights = require("./bbdd_soporte_ugrights");

function initModels(sequelize) {
  var Abobe = _Abobe(sequelize, DataTypes);
  var Agenda = _Agenda(sequelize, DataTypes);
  var Almacen = _Almacen(sequelize, DataTypes);
  var Areas = _Areas(sequelize, DataTypes);
  var Auriculares = _Auriculares(sequelize, DataTypes);
  var AuricularesPrestamos = _AuricularesPrestamos(sequelize, DataTypes);
  var Autoscript = _Autoscript(sequelize, DataTypes);
  var Autoscript_tipo = _Autoscript_tipo(sequelize, DataTypes);
  var Desafectados = _Desafectados(sequelize, DataTypes);
  var Edificio = _Edificio(sequelize, DataTypes);
  var Estaciones _edicion = _Estaciones _edicion(sequelize, DataTypes);
  var Estaciones _trabajo = _Estaciones _trabajo(sequelize, DataTypes);
  var Estaciones_torre = _Estaciones_torre(sequelize, DataTypes);
  var Impresoras = _Impresoras(sequelize, DataTypes);
  var Mesas_sonido = _Mesas_sonido(sequelize, DataTypes);
  var Miembros_departamento = _Miembros_departamento(sequelize, DataTypes);
  var Planta = _Planta(sequelize, DataTypes);
  var Portatiles = _Portatiles(sequelize, DataTypes);
  var Prestamos = _Prestamos(sequelize, DataTypes);
  var Sala_maquinas = _Sala_maquinas(sequelize, DataTypes);
  var Servidores = _Servidores(sequelize, DataTypes);
  var Servidores_cctt = _Servidores_cctt(sequelize, DataTypes);
  var Switch = _Switch(sequelize, DataTypes);
  var Ubicacion = _Ubicacion(sequelize, DataTypes);
  var Umts = _Umts(sequelize, DataTypes);
  var Usuarios = _Usuarios(sequelize, DataTypes);
  var bbdd_soporte_audit = _bbdd_soporte_audit(sequelize, DataTypes);
  var bbdd_soporte_locking = _bbdd_soporte_locking(sequelize, DataTypes);
  var bbdd_soporte_settings = _bbdd_soporte_settings(sequelize, DataTypes);
  var bbdd_soporte_uggroups = _bbdd_soporte_uggroups(sequelize, DataTypes);
  var bbdd_soporte_ugmembers = _bbdd_soporte_ugmembers(sequelize, DataTypes);
  var bbdd_soporte_ugrights = _bbdd_soporte_ugrights(sequelize, DataTypes);


  return {
    Abobe,
    Agenda,
    Almacen,
    Areas,
    Auriculares,
    AuricularesPrestamos,
    Autoscript,
    Autoscript_tipo,
    Desafectados,
    Edificio,
    Estaciones _edicion,
    Estaciones _trabajo,
    Estaciones_torre,
    Impresoras,
    Mesas_sonido,
    Miembros_departamento,
    Planta,
    Portatiles,
    Prestamos,
    Sala_maquinas,
    Servidores,
    Servidores_cctt,
    Switch,
    Ubicacion,
    Umts,
    Usuarios,
    bbdd_soporte_audit,
    bbdd_soporte_locking,
    bbdd_soporte_settings,
    bbdd_soporte_uggroups,
    bbdd_soporte_ugmembers,
    bbdd_soporte_ugrights,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
