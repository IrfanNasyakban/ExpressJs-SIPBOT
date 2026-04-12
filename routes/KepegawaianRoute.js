const express = require("express");
const {
    getAllKepegawaian,
    getKepegawaian,
    getKepegawaianById,
    createKepegawaian,
    updateKepegawaian,
    deleteKepegawaian
} = require("../controllers/KepegawaianController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-kepegawaian', verifyUser, adminOnly, getAllKepegawaian)
router.get('/kepegawaian', verifyUser, adminOnly, getKepegawaian)
router.get('/kepegawaian/:id', verifyUser, adminOnly, getKepegawaianById)
router.post('/kepegawaian', verifyUser, adminOnly, createKepegawaian)
router.patch('/kepegawaian/:id', verifyUser, adminOnly, updateKepegawaian)
router.delete('/kepegawaian/:id', verifyUser, adminOnly, deleteKepegawaian)

module.exports = router;