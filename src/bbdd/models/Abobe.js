import { DataTypes } from 'sequelize';

export const modeloAbobe = (sequelize) => {
  return sequelize.define('Abobe', {
    AdobeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EstacionEdicionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PortatilEdicionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Correo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PassCorreo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    UsuarioAdobe: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PassAdobe: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FechaInstalacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Photoshop: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    AfterEffects: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    MediaEncoder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    PremierPro: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    Boris: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    Observaciones: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Abobe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AdobeID" },
        ]
      },
    ]
  });
};
