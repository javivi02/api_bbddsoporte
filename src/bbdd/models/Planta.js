import { DataTypes } from 'sequelize';

export const modeloPlanta = (sequelize) => {
  return sequelize.define('Planta', {
    PlantaID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Planta: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EdificioID: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Planta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PlantaID" },
        ]
      },
    ]
  });
};
