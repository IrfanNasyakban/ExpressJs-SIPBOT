const Ukuran = require("../models/UkuranModel.js");
const Users = require("../models/UserModel.js");

const getAllUkuran = async (req, res) => {
    try {
        const response = await Ukuran.findAll({
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

const getUkuran = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Ukuran.findAll({
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

const getUkuranById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Ukuran.findOne({
                attributes: ['id', 'idPegawaian', 'ukuranPadDivamot', 'ukuranSepatu', 'ukuranTopi'],
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

const createUkuran = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const ukuranPadDivamot = req.body.ukuranPadDivamot;
    const ukuranSepatu = req.body.ukuranSepatu;
    const ukuranTopi = req.body.ukuranTopi;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Ukuran.create({
            idPegawai: idPegawai,
            ukuranPadDivamot: ukuranPadDivamot,
            ukuranSepatu: ukuranSepatu,
            ukuranTopi: ukuranTopi,
            userId: req.userId
        });

        res.json({ msg: "Ukuran Created" });
    } catch (error) {
        console.log(error);
    }
};

const updateUkuran = async (req, res) => {
    try {
        await Ukuran.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Ukuran Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deleteUkuran = async (req, res) => {
    try {
        await Ukuran.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Ukuran Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllUkuran,
  getUkuran,
  getUkuranById,
  createUkuran,
  updateUkuran,
  deleteUkuran,
};