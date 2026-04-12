const Users = require("./UserModel");
const Pegawai = require("./PegawaiModel");
const Kepegawaian = require("./KepegawaianModel");
const Pangkat = require("./PangkatModel");
const Alamat = require("./AlamatModel");

function setupAssociations() {
    // User Associations
  Users.hasMany(Pegawai);
  Pegawai.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Kepegawaian);
  Kepegawaian.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Pangkat);
  Pangkat.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Alamat);
  Alamat.belongsTo(Users, { foreignKey: "userId" });

  // Pegawai Associations
  Pegawai.hasMany(Kepegawaian, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Kepegawaian.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    as: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Pangkat, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Pangkat.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    as: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Alamat, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Alamat.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    as: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
}

module.exports = setupAssociations;