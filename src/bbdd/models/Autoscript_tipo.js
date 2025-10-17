import { DataTypes } from 'sequelize'

export const modeloAutoscriptTipo = (sequelize) => {
  return sequelize.define('Autoscript_tipo', {
    AutoscriptTipoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Autoscript_tipo',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'AutoscriptTipoID' }
        ]
      }
    ]
  })
}
