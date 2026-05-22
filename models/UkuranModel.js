const { Sequelize } = require("sequelize");
const db = require("../config/database.js");

const { DataTypes } = Sequelize;

const Ukuran = db.define(
  "ukuran",
  {
    idPegawai: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ukuranPadDivamot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ukuranSepatu: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ukuranTopi: {
      type: DataTypes.STRING,
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

module.exports = Ukuran;