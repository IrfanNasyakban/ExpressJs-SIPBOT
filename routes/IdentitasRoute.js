const express = require("express");
const {
    getAllIdentitas,
    getIdentitas,
    getIdentitasById,
    createIdentitas,
    updateIdentitas,
    deleteIdentitas
} = require("../controllers/IdentitasController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-identitas', verifyUser, adminOnly, getAllIdentitas)
router.get('/identitas', verifyUser, adminOnly, getIdentitas)
router.get('/identitas/:id', verifyUser, adminOnly, getIdentitasById)
router.post('/identitas', verifyUser, adminOnly, createIdentitas)
router.patch('/identitas/:id', verifyUser, adminOnly, updateIdentitas)
router.delete('/identitas/:id', verifyUser, adminOnly, deleteIdentitas)

module.exports = router;