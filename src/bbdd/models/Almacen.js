import { DataTypes } from 'sequelize'

export const modeloAlmacen = (sequelize) => {
  return sequelize.define('Almacen', {
    AlmacenID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Sala_maquinasID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UbicacionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Numero_serie: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    Etiqueta_RTVE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Almacen',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'AlmacenID' }
        ]
      }
    ]
  })
}
