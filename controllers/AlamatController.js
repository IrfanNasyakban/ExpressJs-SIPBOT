const Alamat = require("../models/AlamatModel.js");
const Users = require("../models/UserModel.js");
const Pegawai = require("../models/PegawaiModel.js");

const getAllAlamat = async (req, res) => {
    try {
        const response = await Alamat.findAll({
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

const getAlamat = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Alamat.findAll({
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

const getAlamatById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Alamat.findOne({
                attributes: ['id', 'idPegawai', 'alamatKTP', 'alamatDomisili'],
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

const createAlamat = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const alamatKTP = req.body.alamatKTP;
    const alamatDomisili = req.body.alamatDomisili;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Alamat.create({
            idPegawai: idPegawai,
            alamatKTP: alamatKTP,
            alamatDomisili: alamatDomisili,
            userId: req.userId
        });

        res.json({ msg: "Alamat Created" });
    } catch (error) {
        console.log(error);
    }
};

const updateAlamat = async (req, res) => {
    try {
        await Alamat.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Alamat Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deleteAlamat = async (req, res) => {
    try {
        await Alamat.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Alamat Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllAlamat,
  getAlamat,
  getAlamatById,
  createAlamat,
  updateAlamat,
  deleteAlamat,
};