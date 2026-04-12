const Pegawai = require("../models/PegawaiModel.js");
const Users = require("../models/UserModel.js");

const getAllPegawai = async (req, res) => {
    try {
        const response = await Pegawai.findAll({
            include: [{
                model: Users,
                attributes: ['username', 'email', 'role']
            }],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getPegawai = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Pegawai.findAll({
                include: [{
                    model: Users,
                    attributes: ['username', 'email', 'role']
                }],
            });
            res.status(200).json(response);
        } else {
            res.status(422).json(msg="Akses hanya untuk admin");
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getPegawaiById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Pegawai.findOne({
                attributes: ['id', 'nip', 'nama', 'gelarDepan', 'gelarBelakang', 'namaDenganGelar', 'tempatLahir', 'tanggalLahir', 'gender', 'agama', 'statusPegawai', 'emailPribadi', 'emailDinas', 'noHp', 'hobi'],
                where: {
                    id: req.params.id
                },
                include: [{
                    model: Users,
                    attributes: ['username', 'email']
                }]
            })
        } else {
            res.status(422).json(msg="Akses hanya untuk admin");
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createPegawai = async (req, res) => {
    const nip = req.body.nip;
    const nama = req.body.nama;
    const gelarDepan = req.body.gelarDepan;
    const gelarBelakang = req.body.gelarBelakang;
    const namaDenganGelar = req.body.namaDenganGelar;
    const tempatLahir = req.body.tempatLahir;
    const tanggalLahir = req.body.tanggalLahir;
    const gender = req.body.gender;
    const agama = req.body.agama;
    const statusPegawai = req.body.statusPegawai;
    const emailPribadi = req.body.emailPribadi;
    const emailDinas = req.body.emailDinas;
    const noHp = req.body.noHp;
    const hobi = req.body.hobi;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Pegawai.create({
            nip: nip,
            nama: nama,
            gelarDepan: gelarDepan,
            gelarBelakang: gelarBelakang,
            namaDenganGelar: namaDenganGelar,
            tempatLahir: tempatLahir,
            tanggalLahir: tanggalLahir,
            gender: gender,
            agama: agama,
            statusPegawai: statusPegawai,
            emailPribadi: emailPribadi,
            emailDinas: emailDinas,
            noHp: noHp,
            hobi: hobi,
            userId: req.userId
        });

        res.json({ msg: "Pegawai Created" });
    } catch (error) {
        console.log(error);
    }
};

const updatePegawai = async (req, res) => {
    try {
        await Pegawai.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Pegawai Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deletePegawai = async (req, res) => {
    try {
        await Pegawai.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Pegawai Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllPegawai,
  getPegawai,
  getPegawaiById,
  createPegawai,
  updatePegawai,
  deletePegawai,
};