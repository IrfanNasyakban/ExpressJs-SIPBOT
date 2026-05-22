const { Sequelize } = require("sequelize");
const db = require("../config/database.js");

const { DataTypes } = Sequelize;

const Kepegawaian = db.define(
  "kepegawaian",
  {
    idPegawai: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    statusKepegawaian: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tmtJabatan: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    bagianKerja: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eselon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    angkatanPejim: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ppns: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tmtPensiun: {
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

module.exports = Kepegawaian;