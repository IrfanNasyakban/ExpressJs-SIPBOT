const Kepegawaian = require("../models/KepegawaianModel.js");
const Users = require("../models/UserModel.js");

const getAllKepegawaian = async (req, res) => {
    try {
        const response = await Kepegawaian.findAll({
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

const getKepegawaian = async (req, res) => {
    try {
        if (req.role === "admin") {
            const response = await Kepegawaian.findAll({
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

const getKepegawaianById = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Kepegawaian.findOne({
                attributes: ['id', 'idPegawaian', 'statusKepegawaian', 'jabatan', 'tmtJabatan', 'bagianKerja', 'eselon', 'angkatanPejim', 'ppns', 'tmtPensiun'],
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

const createKepegawaian = async (req, res) => {
    const idPegawai = req.body.idPegawai;
    const statusKepegawaian = req.body.statusKepegawaian;
    const jabatan = req.body.jabatan;
    const tmtJabatan = req.body.tmtJabatan;
    const bagianKerja = req.body.bagianKerja;
    const eselon = req.body.eselon;
    const angkatanPejim = req.body.angkatanPejim;
    const ppns = req.body.ppns;
    const tmtPensiun = req.body.tmtPensiun;

    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ error: "User ID not found in the request" });
        }

        await Kepegawaian.create({
            idPegawai: idPegawai,
            statusKepegawaian: statusKepegawaian,
            jabatan: jabatan,
            tmtJabatan: tmtJabatan,
            bagianKerja: bagianKerja,
            eselon: eselon,
            angkatanPejim: angkatanPejim,
            ppns: ppns,
            tmtPensiun: tmtPensiun
        });

        res.json({ msg: "Kepegawaian Created" });
    } catch (error) {
        console.log(error);
    }
};

const updateKepegawaian = async (req, res) => {
    try {
        await Kepegawaian.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Kepegawaian Updated" })
    } catch (error) {
        console.log(error.message);
    }
};

const deleteKepegawaian = async (req, res) => {
    try {
        await Kepegawaian.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Kepegawaian Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
  getAllKepegawaian,
  getKepegawaian,
  getKepegawaianById,
  createKepegawaian,
  updateKepegawaian,
  deleteKepegawaian,
};