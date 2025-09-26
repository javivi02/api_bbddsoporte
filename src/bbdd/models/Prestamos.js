import { DataTypes } from 'sequelize';

export const modeloPrestamos = (sequelize) => {
  return sequelize.define('Prestamos', {
    PrestamosID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PortatilID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Fecha_entrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Devolucion_prevista: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Fecha_devolucion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Control_devolucion: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Entregado_a: {
      type: DataTypes.STRING(33),
      allowNull: true
    },
    Telefono: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AreaID: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Motivo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Umts: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Alimentacion: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Cable_red: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Raton: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Prestamos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PrestamosID" },
        ]
      },
    ]
  });
};
