const express = require("express");
const {
    getAllFisik,
    getFisik,
    getFisikById,
    createFisik,
    updateFisik,
    deleteFisik
} = require("../controllers/FisikController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-fisik', verifyUser, adminOnly, getAllFisik)
router.get('/fisik', verifyUser, adminOnly, getFisik)
router.get('/fisik/:id', verifyUser, adminOnly, getFisikById)
router.post('/fisik', verifyUser, adminOnly, createFisik)
router.patch('/fisik/:id', verifyUser, adminOnly, updateFisik)
router.delete('/fisik/:id', verifyUser, adminOnly, deleteFisik)

module.exports = router;