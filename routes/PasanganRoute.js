const express = require("express");
const {
    getAllPasangan,
    getPasangan,
    getPasanganById,
    createPasangan,
    updatePasangan,
    deletePasangan
} = require("../controllers/PasanganController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-pasangan', verifyUser, adminOnly, getAllPasangan)
router.get('/pasangan', verifyUser, adminOnly, getPasangan)
router.get('/pasangan/:id', verifyUser, adminOnly, getPasanganById)
router.post('/pasangan', verifyUser, adminOnly, createPasangan)
router.patch('/pasangan/:id', verifyUser, adminOnly, updatePasangan)
router.delete('/pasangan/:id', verifyUser, adminOnly, deletePasangan)

module.exports = router;