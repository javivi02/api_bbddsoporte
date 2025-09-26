import { DataTypes } from 'sequelize';

export const modeloMesasSonido = (sequelize) => {
  return sequelize.define('Mesas_sonido', {
    Mesas_sonidoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Mesa_sonido: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Mesas_sonido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Mesas_sonidoID" },
        ]
      },
    ]
  });
};
