import { DataTypes } from 'sequelize';

export const modeloUmts = (sequelize) => {
  return sequelize.define('Umts', {
    UmtsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Num_corto: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Num_largo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PIN: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PUK: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Umts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UmtsID" },
        ]
      },
    ]
  });
};
