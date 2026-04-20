const Users = require("./UserModel");
const Pegawai = require("./PegawaiModel");
const Kepegawaian = require("./KepegawaianModel");
const Pangkat = require("./PangkatModel");
const Alamat = require("./AlamatModel");
const Identitas = require("./IdentitasModel");
const Rekening = require("./RekeningModel");
const Pendidikan = require("./PendidikanModel");
const Fisik = require("./FisikModel");
const Ukuran = require("./UkuranModel");
const Anak = require("./AnakModel");
const Pasangan = require("./PasanganModel");

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

  Users.hasMany(Identitas);
  Identitas.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Rekening);
  Rekening.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Pendidikan);
  Pendidikan.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Fisik);
  Fisik.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Ukuran);
  Ukuran.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Anak);
  Anak.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Pasangan);
  Pasangan.belongsTo(Users, { foreignKey: "userId" });

  // Pegawai Associations
  Pegawai.hasMany(Kepegawaian, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Kepegawaian.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    alias: "pegawai",
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
    alias: "pegawai",
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
    alias: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Identitas, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Identitas.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    alias: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Rekening, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Rekening.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    alias: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Pendidikan, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Pendidikan.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    alias: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Fisik, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Fisik.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    alias: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Ukuran, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Ukuran.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    alias: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Anak, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Anak.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    alias: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

  Pegawai.hasMany(Pasangan, {
    foreignKey: "idPegawai",
    onDelete: "CASCADE",
    hooks: true,
  });
  Pasangan.belongsTo(Pegawai, {
    foreignKey: "idPegawai",
    alias: "pegawai",
    onDelete: "CASCADE",
    hooks: true,
  });

}

module.exports = setupAssociations;