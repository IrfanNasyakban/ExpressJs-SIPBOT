const express = require("express");
const {
    getAllRekening,
    getRekening,
    getRekeningById,
    createRekening,
    updateRekening,
    deleteRekening
} = require("../controllers/RekeningController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-rekening', verifyUser, adminOnly, getAllRekening)
router.get('/rekening', verifyUser, adminOnly, getRekening)
router.get('/rekening/:id', verifyUser, adminOnly, getRekeningById)
router.post('/rekening', verifyUser, adminOnly, createRekening)
router.patch('/rekening/:id', verifyUser, adminOnly, updateRekening)
router.delete('/rekening/:id', verifyUser, adminOnly, deleteRekening)

module.exports = router;