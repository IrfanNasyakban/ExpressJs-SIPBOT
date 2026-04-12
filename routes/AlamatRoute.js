const express = require("express");
const {
    getAllAlamat,
    getAlamat,
    getAlamatById,
    createAlamat,
    updateAlamat,
    deleteAlamat
} = require("../controllers/AlamatController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-alamat', verifyUser, adminOnly, getAllAlamat)
router.get('/alamat', verifyUser, adminOnly, getAlamat)
router.get('/alamat/:id', verifyUser, adminOnly, getAlamatById)
router.post('/alamat', verifyUser, adminOnly, createAlamat)
router.patch('/alamat/:id', verifyUser, adminOnly, updateAlamat)
router.delete('/alamat/:id', verifyUser, adminOnly, deleteAlamat)

module.exports = router;