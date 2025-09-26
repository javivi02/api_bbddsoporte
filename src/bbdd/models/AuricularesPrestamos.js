import { DataTypes } from 'sequelize';

export const modeloAuricularesPrestamos = (sequelize) => {
  return sequelize.define('AuricularesPrestamos', {
    AuricularesPrestamosID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AuricularesID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'Entregado a': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UsuarioInews: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AreaID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'Fecha de Entrega': {
      type: DataTypes.DATE,
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AuricularesPrestamos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AuricularesPrestamosID" },
        ]
      },
    ]
  });
};
