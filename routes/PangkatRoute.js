const express = require("express");
const {
    getAllPangkat,
    getPangkat,
    getPangkatById,
    createPangkat,
    updatePangkat,
    deletePangkat
} = require("../controllers/PangkatController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-pangkat', verifyUser, adminOnly, getAllPangkat)
router.get('/pangkat', verifyUser, adminOnly, getPangkat)
router.get('/pangkat/:id', verifyUser, adminOnly, getPangkatById)
router.post('/pangkat', verifyUser, adminOnly, createPangkat)
router.patch('/pangkat/:id', verifyUser, adminOnly, updatePangkat)
router.delete('/pangkat/:id', verifyUser, adminOnly, deletePangkat)

module.exports = router;