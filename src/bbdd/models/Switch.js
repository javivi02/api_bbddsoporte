import { DataTypes } from 'sequelize';

export const modeloSwitch = (sequelize) => {
  return sequelize.define('Switch', {
    SwitchID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Switch: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EdificioID: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PlantaID: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Sala_maquinasID: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    UbicacionID: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Switch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SwitchID" },
        ]
      },
    ]
  });
};
