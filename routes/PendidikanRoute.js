const express = require("express");
const {
    getAllPendidikan,
    getPendidikan,
    getPendidikanById,
    createPendidikan,
    updatePendidikan,
    deletePendidikan
} = require("../controllers/PendidikanController.js") 
const { verifyUser, adminOnly } = require("../middleware/AuthUser.js") 

const router = express.Router()

router.get('/all-pendidikan', verifyUser, adminOnly, getAllPendidikan)
router.get('/pendidikan', verifyUser, adminOnly, getPendidikan)
router.get('/pendidikan/:id', verifyUser, adminOnly, getPendidikanById)
router.post('/pendidikan', verifyUser, adminOnly, createPendidikan)
router.patch('/pendidikan/:id', verifyUser, adminOnly, updatePendidikan)
router.delete('/pendidikan/:id', verifyUser, adminOnly, deletePendidikan)

module.exports = router;