import { DataTypes } from 'sequelize'

export const modeloEquipamiento = (sequelize) => {
  return sequelize.define('Equipamiento', {
    EquipamientoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Equipamiento_tipoID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Numero_serie: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Numero_rtve: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Pool: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    Desafectado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Equipamiento',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'EquipamientoID' }
        ]
      }
    ]
  })
}
