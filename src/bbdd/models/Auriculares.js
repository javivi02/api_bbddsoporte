import { DataTypes } from 'sequelize';

export const modeloAuriculares = (sequelize) => {
  return sequelize.define('Auriculares', {
    AuricularesID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Auriculares: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Auriculares',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AuricularesID" },
        ]
      },
    ]
  });
};
