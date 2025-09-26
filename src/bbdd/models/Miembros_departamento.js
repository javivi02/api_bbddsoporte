import { DataTypes } from 'sequelize';

export const modeloMiembrosDepartamento = (sequelize) => {
  return sequelize.define('Miembros_departamento', {
    Miembros_departamentoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DNI: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    SS: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Matricula_rtve: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Telefono_fijo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Telefono_movil: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Telefono_abreviado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Coche: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Matricula_coche: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Foto: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Miembros_departamento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Miembros_departamentoID" },
        ]
      },
    ]
  });
};
