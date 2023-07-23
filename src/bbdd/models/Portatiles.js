import { DataTypes } from 'sequelize'

export const modeloPortatiles = (sequelize) => {

  return sequelize.define('Portatiles', {
    PortatilID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Portatil: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Direccion_ip_torre: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Direccion_ip_wireless: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Portatil_serie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Portatil_rtve: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Pool: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Desafectado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    Edicion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Portatiles',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'PortatilID' },
        ]
      },
    ]
  })
}