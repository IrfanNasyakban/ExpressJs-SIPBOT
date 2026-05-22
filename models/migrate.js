const db = require("../config/database"); // sesuaikan path

const migrations = [
  `ALTER TABLE anak MODIFY COLUMN namaAnak VARCHAR(255) NULL`,
  `ALTER TABLE identitas MODIFY COLUMN nik VARCHAR(255) NULL`,
  `ALTER TABLE identitas MODIFY COLUMN nomorKK VARCHAR(255) NULL`,
  `ALTER TABLE identitas MODIFY COLUMN nomorBPJS VARCHAR(255) NULL`,
  `ALTER TABLE identitas MODIFY COLUMN nomorTaspen VARCHAR(255) NULL`,
  `ALTER TABLE kepegawaian MODIFY COLUMN statusKepegawaian VARCHAR(255) NULL`,
  `ALTER TABLE kepegawaian MODIFY COLUMN jabatan VARCHAR(255) NULL`,
  `ALTER TABLE kepegawaian MODIFY COLUMN tmtJabatan DATE NULL`,
  `ALTER TABLE kepegawaian MODIFY COLUMN bagianKerja VARCHAR(255) NULL`,
  `ALTER TABLE kepegawaian MODIFY COLUMN eselon VARCHAR(255) NULL`,
  `ALTER TABLE kepegawaian MODIFY COLUMN angkatanPejim VARCHAR(255) NULL`,
  `ALTER TABLE kepegawaian MODIFY COLUMN ppns VARCHAR(255) NULL`,
  `ALTER TABLE kepegawaian MODIFY COLUMN tmtPensiun DATE NULL`,
  `ALTER TABLE pangkat MODIFY COLUMN pangkat VARCHAR(255) NULL`,
  `ALTER TABLE pangkat MODIFY COLUMN golonganRuang VARCHAR(255) NULL`,
  `ALTER TABLE pangkat MODIFY COLUMN tanggalSKPangkat DATE NULL`,
  `ALTER TABLE pangkat MODIFY COLUMN nomorSKPangkat VARCHAR(255) NULL`,
  `ALTER TABLE pangkat MODIFY COLUMN SKPangkatDari VARCHAR(255) NULL`,
  `ALTER TABLE pangkat MODIFY COLUMN uraianSKPangkat VARCHAR(255) NULL`,
  `ALTER TABLE pangkat MODIFY COLUMN tmtPangkat DATE NULL`,
  `ALTER TABLE pasangan MODIFY COLUMN namaPasangan VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN gelarDepan VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN gelarBelakang VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN tempatLahir VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN tanggalLahir DATE NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN gender VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN agama VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN statusPegawai BOOLEAN NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN emailPribadi VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN emailDinas VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN noHp VARCHAR(255) NULL`,
  `ALTER TABLE pegawai MODIFY COLUMN hobi VARCHAR(255) NULL`,
  `ALTER TABLE pendidikan MODIFY COLUMN pendidikanTerakhir VARCHAR(255) NULL`,
  `ALTER TABLE rekening MODIFY COLUMN nomorRekGaji VARCHAR(255) NULL`,
  `ALTER TABLE rekening MODIFY COLUMN namaBank VARCHAR(255) NULL`,
  `ALTER TABLE rekening MODIFY COLUMN kantorCabang VARCHAR(255) NULL`,
  `ALTER TABLE ukuran MODIFY COLUMN ukuranPadDivamot VARCHAR(255) NULL`,
  `ALTER TABLE ukuran MODIFY COLUMN ukuranSepatu VARCHAR(255) NULL`,
  `ALTER TABLE ukuran MODIFY COLUMN ukuranTopi VARCHAR(255) NULL`,
  `ALTER TABLE fisik MODIFY COLUMN tinggiBadan INT NULL`,
  `ALTER TABLE fisik MODIFY COLUMN beratBadan INT NULL`,
  `ALTER TABLE fisik MODIFY COLUMN jenisRambut VARCHAR(255) NULL`,
  `ALTER TABLE fisik MODIFY COLUMN warnaRambut VARCHAR(255) NULL`,
  `ALTER TABLE fisik MODIFY COLUMN bentukWajah VARCHAR(255) NULL`,
  `ALTER TABLE fisik MODIFY COLUMN warnaKulit VARCHAR(255) NULL`,
  `ALTER TABLE fisik MODIFY COLUMN ciriKhusus VARCHAR(255) NULL`,
];

const runMigrations = async () => {
  try {
    await db.authenticate();
    console.log("✅ Koneksi database berhasil");

    for (const sql of migrations) {
      await db.query(sql);
      console.log(`✅ Berhasil: ${sql}`);
    }

    console.log("🎉 Semua migration selesai!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Migration gagal:", error.message);
    process.exit(1);
  }
};

runMigrations();
