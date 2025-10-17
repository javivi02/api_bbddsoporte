import { DataTypes } from 'sequelize'

export const modeloGruposUsuarios = (sequelize) => {
  return sequelize.define('Grupos_usuarios', {
    Grupos_usuariosID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Grupo_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Grupos_usuarios',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'Grupos_usuariosID' }
        ]
      }
    ]
  })
}
