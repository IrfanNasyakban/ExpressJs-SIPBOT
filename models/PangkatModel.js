const { Sequelize } = require("sequelize");
const db = require("../config/database.js");

const { DataTypes } = Sequelize;

const Pangkat = db.define(
  "pangkat",
  {
    idPegawai: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pangkat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    golonganRuang: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tanggalSKPangkat: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    nomorSKPangkat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SKPangkatDari: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uraianSKPangkat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tmtPangkat: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = Pangkat;