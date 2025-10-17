import { DataTypes } from 'sequelize'

export const modeloAgenda = (sequelize) => {
  return sequelize.define('Agenda', {
    AgendaID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Telefono_fijo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Fijo_abreviado: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Telefono_movil: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Movil_abreviado: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AreaID: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Agenda',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'AgendaID' }
        ]
      }
    ]
  })
}
