var DataTypes = require("sequelize").DataTypes;
var _Grupos_usuarios = require("./Grupos_usuarios");

function initModels(sequelize) {
  var Grupos_usuarios = _Grupos_usuarios(sequelize, DataTypes);


  return {
    Grupos_usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
