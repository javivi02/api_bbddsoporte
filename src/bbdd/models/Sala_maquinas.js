import { DataTypes } from 'sequelize';

export const modeloSalaMaquinas = (sequelize) => {
  return sequelize.define('Sala_maquinas', {
    Sala_maquinasID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Sala_maquinas: {
      type: DataTypes.STRING(50),
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
    tableName: 'Sala_maquinas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Sala_maquinasID" },
        ]
      },
    ]
  });
};
