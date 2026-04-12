const Fisik = require("../models/FisikModel.js");
const Users = require("../models/UserModel.js");

const getAllFisik = async (req, res) => {
    try {
        const response = await Fisik.findAll({
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

const getFisik = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Fisik.findAll({
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

const getFisikById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Fisik.findOne({
                attributes: ['id', 'idPegawaian', 'tinggiBadan', 'beratBadan', 'jenisRambut', 'warnaRambut', 'bentukWajah', 'warnaKulit', 'ciriKhusus'],
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

const createFisik = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const tinggiBadan = req.body.tinggiBadan;
    const beratBadan = req.body.beratBadan;
    const jenisRambut = req.body.jenisRambut;
    const warnaRambut = req.body.warnaRambut;
    const bentukWajah = req.body.bentukWajah;
    const warnaKulit = req.body.warnaKulit;
    const ciriKhusus = req.body.ciriKhusus;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Fisik.create({
            idPegawai: idPegawai,
            tinggiBadan: tinggiBadan,
            beratBadan: beratBadan,
            jenisRambut: jenisRambut,
            warnaRambut: warnaRambut,
            bentukWajah: bentukWajah,
            warnaKulit: warnaKulit,
            ciriKhusus: ciriKhusus
        });

        res.json({ msg: "Fisik Created" });
    } catch (error) {
        console.log(error);
    }
};

const updateFisik = async (req, res) => {
    try {
        await Fisik.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Fisik Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deleteFisik = async (req, res) => {
    try {
        await Fisik.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Fisik Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllFisik,
  getFisik,
  getFisikById,
  createFisik,
  updateFisik,
  deleteFisik,
};