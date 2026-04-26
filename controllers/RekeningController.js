const Rekening = require("../models/RekeningModel.js");
const Users = require("../models/UserModel.js");
const Pegawai = require("../models/PegawaiModel.js");

const getAllRekening = async (req, res) => {
    try {
        const response = await Rekening.findAll({
            include: [{
                model: Users,
                attributes: ['username', 'email', 'role']
            }, {
                model: Pegawai,
                attributes: ['namaDenganGelar']
            }],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getRekening = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Rekening.findAll({
                include: [{
                    model: Users,
                    attributes: ['username', 'email', 'role']
                }, {
                    model: Pegawai,
                    attributes: ['namaDenganGelar']
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

const getRekeningById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Rekening.findOne({
                attributes: ['id', 'idPegawai', 'nomorRekGaji', 'namaBank', 'kantorCabang'],
                where: {
                    id: req.params.id
                },
                include: [{
                    model: Users,
                    attributes: ['username', 'email']
                }, {
                    model: Pegawai,
                    attributes: ['namaDenganGelar', 'nip']
                }],
            })
        } else {
            res.status(422).json(msg="Akses hanya untuk admin");
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

const createRekening = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const nomorRekGaji = req.body.nomorRekGaji;
    const namaBank = req.body.namaBank;
    const kantorCabang = req.body.kantorCabang;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Rekening.create({
            idPegawai: idPegawai,
            nomorRekGaji: nomorRekGaji,
            namaBank: namaBank,
            kantorCabang: kantorCabang,
            userId: req.userId
        });

        res.json({ msg: "Rekening Created" });
    } catch (error) {
        console.log(error);
    }
};

const updateRekening = async (req, res) => {
    try {
        await Rekening.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Rekening Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deleteRekening = async (req, res) => {
    try {
        await Rekening.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Rekening Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllRekening,
  getRekening,
  getRekeningById,
  createRekening,
  updateRekening,
  deleteRekening,
};