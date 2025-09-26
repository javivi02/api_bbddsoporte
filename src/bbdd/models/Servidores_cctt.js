import { DataTypes } from 'sequelize';

export const modeloServidoresCctt = (sequelize) => {
  return sequelize.define('Servidores_cctt', {
    Servidores_ccttID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Identificacion: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Direccion_ip: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Direccion_ip2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Modelo: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    Numero_serie: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    Etiqueta_rtve: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    Garantia: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    Dongle: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Sysid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Switch: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Puerto_Switch: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Desafectado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Servidores_cctt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Servidores_ccttID" },
        ]
      },
    ]
  });
};
