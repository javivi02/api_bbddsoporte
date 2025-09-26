import { DataTypes } from 'sequelize';

export const modeloEstacionesTorre = (sequelize) => {
  return sequelize.define('Estaciones_torre', {
    Estaciones_torreID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Identificacion: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Direccion_ip: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    AreaID: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    Caja: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SwitchID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Puerto_Switch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Dongle: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Sysid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Cpu: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Cpu_serie: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Cpu_rtve: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Artist_DNxIO_serie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Artist_DNxIO_rtve: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Monitor: {
      type: DataTypes.STRING(23),
      allowNull: true
    },
    Monitor_serie: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Monitor_rtve: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Monitor2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Monitor2_serie: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Monitor2_rtve: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Mesa_sonidoID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Mesa_sonido_serie: {
      type: DataTypes.STRING(20),
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
    tableName: 'Estaciones_torre',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Estaciones_torreID" },
        ]
      },
      {
        name: "direccion_ip",
        using: "BTREE",
        fields: [
          { name: "Direccion_ip" },
        ]
      },
      {
        name: "identificacion",
        using: "BTREE",
        fields: [
          { name: "Identificacion" },
        ]
      },
    ]
  });
};
