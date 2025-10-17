import { DataTypes } from 'sequelize'

export const modeloUsuarios = (sequelize) => {
  return sequelize.define('Usuarios', {
    UsuariosID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Nombre: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    DNI: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Matricula_rtve: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Telefono_movil: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Telefono_rtve: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Telefono_rtve_corto: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Grupos_usariosID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Usuarios',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'UsuariosID' }
        ]
      }
    ]
  })
}
