import { DataTypes } from 'sequelize';

export const modeloUbicacion = (sequelize) => {
  return sequelize.define('Ubicacion', {
    UbicacionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ubicacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Sala_maquinasID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EdificioID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PlantaID: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Ubicacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UbicacionID" },
        ]
      },
    ]
  });
};
