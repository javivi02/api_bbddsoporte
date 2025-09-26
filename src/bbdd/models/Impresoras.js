import { DataTypes } from 'sequelize';

export const modeloImpresoras = (sequelize) => {
  return sequelize.define('Impresoras', {
    ImpresoraID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Modelo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Direccion_ip: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AreaID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Numero_serie: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Etiqueta_rtve: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Caja_red: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SwitchID: {
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
    tableName: 'Impresoras',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ImpresoraID" },
        ]
      },
      {
        name: "si_impresoras_n_impresora_serie_direccion_ip",
        using: "BTREE",
        fields: [
          { name: "Direccion_ip" },
        ]
      },
    ]
  });
};
