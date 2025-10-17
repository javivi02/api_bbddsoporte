import { DataTypes } from 'sequelize'

export const modeloPrestamoTipo = (sequelize) => {
  return sequelize.define('Prestamo_tipo', {
    Prestamo_tipoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Prestamo_tipo',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'Prestamo_tipoID' }
        ]
      }
    ]
  })
}
