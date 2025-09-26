import { DataTypes } from 'sequelize';

export const modeloDesafectados = (sequelize) => {
  return sequelize.define('Desafectados', {
    DesafectadosID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Identificacion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RTVE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Serie: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Desafectados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DesafectadosID" },
        ]
      },
    ]
  });
};
