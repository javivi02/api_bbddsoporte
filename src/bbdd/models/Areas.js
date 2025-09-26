import { DataTypes } from 'sequelize';

export const modeloAreas = (sequelize) => {
  return sequelize.define('Areas', {
    AreaID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Area: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    EdificioID: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PlantaID: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Areas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AreaID" },
        ]
      },
    ]
  });
};
