const { Sequelize } = require("sequelize");
const db = require("../config/database.js");

const { DataTypes } = Sequelize;

const Fisik = db.define(
  "fisik",
  {
    idPegawai: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tinggiBadan: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    beratBadan: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    jenisRambut: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    warnaRambut: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bentukWajah: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    warnaKulit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ciriKhusus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = Fisik;