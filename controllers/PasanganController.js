const Pasangan = require("../models/PasanganModel.js");
const Users = require("../models/UserModel.js");
const Pegawai = require("../models/PegawaiModel.js");

const getAllPasangan = async (req, res) => {
    try {
        const response = await Pasangan.findAll({
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

const getPasangan = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Pasangan.findAll({
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

const getPasanganById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Pasangan.findOne({
                attributes: ['id', 'idPegawai', 'namaPasangan'],
                where: {
                    id: req.params.id
                },
                include: [{
                    model: Users,
                    attributes: ['username', 'email']
                }, {
                    model: Pegawai,
                    attributes: ['namaDenganGelar', 'nip']
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

const createPasangan = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const namaPasangan = req.body.namaPasangan;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Pasangan.create({
            idPegawai: idPegawai,
            namaPasangan: namaPasangan,
            userId: req.userId
        });

        res.json({ msg: "Pasangan Created" });
    } catch (error) {
        console.log(error);
    }
};

const updatePasangan = async (req, res) => {
    try {
        await Pasangan.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Pasangan Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deletePasangan = async (req, res) => {
    try {
        await Pasangan.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Pasangan Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllPasangan,
  getPasangan,
  getPasanganById,
  createPasangan,
  updatePasangan,
  deletePasangan,
};