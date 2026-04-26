const express = require("express");
const {
    getAllPegawai,
    getPegawai,
    getPegawaiById,
    createPegawai,
    updatePegawai,
    deletePegawai
} = require("../controllers/PegawaiController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-pegawai', getAllPegawai)
router.get('/pegawai', verifyUser, adminOnly, getPegawai)
router.get('/pegawai/:id', verifyUser, adminOnly, getPegawaiById)
router.post('/pegawai', verifyUser, adminOnly, createPegawai)
router.patch('/pegawai/:id', verifyUser, adminOnly, updatePegawai)
router.delete('/pegawai/:id', verifyUser, adminOnly, deletePegawai)

module.exports = router;