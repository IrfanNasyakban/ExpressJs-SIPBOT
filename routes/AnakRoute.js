const express = require("express");
const {
    getAllAnak,
    getAnak,
    getAnakById,
    createAnak,
    updateAnak,
    deleteAnak
} = require("../controllers/AnakController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-anak', verifyUser, adminOnly, getAllAnak)
router.get('/anak', verifyUser, adminOnly, getAnak)
router.get('/anak/:id', verifyUser, adminOnly, getAnakById)
router.post('/anak', verifyUser, adminOnly, createAnak)
router.patch('/anak/:id', verifyUser, adminOnly, updateAnak)
router.delete('/anak/:id', verifyUser, adminOnly, deleteAnak)

module.exports = router;