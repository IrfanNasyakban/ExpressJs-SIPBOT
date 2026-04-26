const Identitas = require("../models/IdentitasModel.js");
const Users = require("../models/UserModel.js");
const Pegawai = require("../models/PegawaiModel.js");

const getAllIdentitas = async (req, res) => {
    try {
        const response = await Identitas.findAll({
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

const getIdentitas = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Identitas.findAll({
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

const getIdentitasById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Identitas.findOne({
                attributes: ['id', 'idPegawai', 'nik', 'nomorKK', 'nomorBPJS', 'nomorTaspen'],
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

const createIdentitas = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const nik = req.body.nik;
    const nomorKK = req.body.nomorKK;
    const nomorBPJS = req.body.nomorBPJS;
    const nomorTaspen = req.body.nomorTaspen;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Identitas.create({
            idPegawai: idPegawai,
            nik: nik,
            nomorKK: nomorKK,
            nomorBPJS: nomorBPJS,
            nomorTaspen: nomorTaspen,
            userId: req.userId
        });

        res.json({ msg: "Identitas Created" });
    } catch (error) {
        console.log(error);
    }
};

const updateIdentitas = async (req, res) => {
    try {
        await Identitas.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Identitas Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deleteIdentitas = async (req, res) => {
    try {
        await Identitas.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Identitas Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllIdentitas,
  getIdentitas,
  getIdentitasById,
  createIdentitas,
  updateIdentitas,
  deleteIdentitas,
};