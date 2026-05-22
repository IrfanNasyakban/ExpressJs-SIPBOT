const { Sequelize } = require("sequelize");
const db = require("../config/database.js");

const { DataTypes } = Sequelize;

const Pegawai = db.define(
  "pegawai",
  {
    nip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    gelarDepan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gelarBelakang: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    namaDenganGelar: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tempatLahir: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    tanggalLahir: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    agama: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    statusPegawai: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    emailPribadi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emailDinas: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    noHp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hobi: {
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

module.exports = Pegawai;