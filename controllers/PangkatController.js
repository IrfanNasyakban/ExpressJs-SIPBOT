const Pangkat = require("../models/PangkatModel.js");
const Users = require("../models/UserModel.js");

const getAllPangkat = async (req, res) => {
    try {
        const response = await Pangkat.findAll({
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

const getPangkat = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Pangkat.findAll({
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

const getPangkatById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Pangkat.findOne({
                attributes: ['id', 'idPegawaian', 'pangkat', 'golonganRuang', 'tanggalSKPangkat', 'nomorSKPangkat', 'SKPangkatDari', 'uraianSKPangkat', 'tmtPangkat'],
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

const createPangkat = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const pangkat = req.body.pangkat;
    const golonganRuang = req.body.golonganRuang;
    const tanggalSKPangkat = req.body.tanggalSKPangkat;
    const nomorSKPangkat = req.body.nomorSKPangkat;
    const SKPangkatDari = req.body.SKPangkatDari;
    const uraianSKPangkat = req.body.uraianSKPangkat;
    const tmtPangkat = req.body.tmtPangkat;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Pangkat.create({
            idPegawai: idPegawai,
            pangkat: pangkat,
            golonganRuang: golonganRuang,
            tanggalSKPangkat: tanggalSKPangkat,
            nomorSKPangkat: nomorSKPangkat,
            SKPangkatDari: SKPangkatDari,
            uraianSKPangkat: uraianSKPangkat,
            tmtPangkat: tmtPangkat
        });

        res.json({ msg: "Pangkat Created" });
    } catch (error) {
        console.log(error);
    }
};

const updatePangkat = async (req, res) => {
    try {
        await Pangkat.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Pangkat Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deletePangkat = async (req, res) => {
    try {
        await Pangkat.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Pangkat Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllPangkat,
  getPangkat,
  getPangkatById,
  createPangkat,
  updatePangkat,
  deletePangkat,
};