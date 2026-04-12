const express = require("express");
const {
    getAllUkuran,
    getUkuran,
    getUkuranById,
    createUkuran,
    updateUkuran,
    deleteUkuran
} = require("../controllers/UkuranController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-ukuran', verifyUser, adminOnly, getAllUkuran)
router.get('/ukuran', verifyUser, adminOnly, getUkuran)
router.get('/ukuran/:id', verifyUser, adminOnly, getUkuranById)
router.post('/ukuran', verifyUser, adminOnly, createUkuran)
router.patch('/ukuran/:id', verifyUser, adminOnly, updateUkuran)
router.delete('/ukuran/:id', verifyUser, adminOnly, deleteUkuran)

module.exports = router;