import { DataTypes } from 'sequelize'

export const modeloEquipamientoTipo = (sequelize) => {
  return sequelize.define('Equipamiento_tipo', {
    Equipamiento_tipoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Equipamiento_tipo',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'Equipamiento_tipoID' }
        ]
      }
    ]
  })
}
