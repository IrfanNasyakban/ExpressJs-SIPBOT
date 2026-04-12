const Anak = require("../models/AnakModel.js");
const Users = require("../models/UserModel.js");

const getAllAnak = async (req, res) => {
    try {
        const response = await Anak.findAll({
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

const getAnak = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Anak.findAll({
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

const getAnakById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Anak.findOne({
                attributes: ['id', 'idPegawaian', 'namaAnak'],
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

const createAnak = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const namaAnak = req.body.namaAnak;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Anak.create({
            idPegawai: idPegawai,
            namaAnak: namaAnak
        });

        res.json({ msg: "Anak Created" });
    } catch (error) {
        console.log(error);
    }
};

const updateAnak = async (req, res) => {
    try {
        await Anak.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Anak Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deleteAnak = async (req, res) => {
    try {
        await Anak.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Anak Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllAnak,
  getAnak,
  getAnakById,
  createAnak,
  updateAnak,
  deleteAnak,
};