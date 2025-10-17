import { DataTypes } from 'sequelize'

export const modeloAutoscript = (sequelize) => {
  return sequelize.define('Autoscript', {
    AutoscriptID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    EtiquetaRTVE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Num_Serie: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Tipo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Autoscript',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'AutoscriptID' }
        ]
      }
    ]
  })
}
