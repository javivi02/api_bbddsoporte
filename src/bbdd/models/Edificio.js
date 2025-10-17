import { DataTypes } from 'sequelize'

export const modeloEdificio = (sequelize) => {
  return sequelize.define('Edificio', {
    EdificioID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Edificio: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Edificio',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'EdificioID' }
        ]
      }
    ]
  })
}
