const Pendidikan = require("../models/PendidikanModel.js");
const Users = require("../models/UserModel.js");

const getAllPendidikan = async (req, res) => {
    try {
        const response = await Pendidikan.findAll({
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

const getPendidikan = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Pendidikan.findAll({
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

const getPendidikanById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Pendidikan.findOne({
                attributes: ['id', 'idPegawaian', 'pendidikanTerakhir'],
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

const createPendidikan = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const pendidikanTerakhir = req.body.pendidikanTerakhir;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Pendidikan.create({
            idPegawai: idPegawai,
            pendidikanTerakhir: pendidikanTerakhir,
            userId: req.userId
        });

        res.json({ msg: "Pendidikan Created" });
    } catch (error) {
        console.log(error);
    }
};

const updatePendidikan = async (req, res) => {
    try {
        await Pendidikan.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Pendidikan Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deletePendidikan = async (req, res) => {
    try {
        await Pendidikan.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Pendidikan Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllPendidikan,
  getPendidikan,
  getPendidikanById,
  createPendidikan,
  updatePendidikan,
  deletePendidikan,
};