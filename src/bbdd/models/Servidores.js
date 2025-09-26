import { DataTypes } from 'sequelize';

export const modeloServidores = (sequelize) => {
  return sequelize.define('Servidores', {
    ServidoresID: {
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
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Etiqueta_rtve: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Garantia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EdificioID: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PlantaID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Sala_maquinasID: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    UbicacionID: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    Dongle: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    Sysid: {
      type: DataTypes.STRING(22),
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
    tableName: 'Servidores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ServidoresID" },
        ]
      },
    ]
  });
};
