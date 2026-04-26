const express = require("express");
const {
    chatWithAI,
    getPegawaiContext
} = require("../controllers/ChatbotController.js");
const { verifyUser } = require("../middleware/AuthUser.js");

const router = express.Router();

// ✅ Tambahkan middleware verifyUser untuk keamanan
router.post('/chat', verifyUser, chatWithAI);
router.get('/pegawai-context', verifyUser, getPegawaiContext);

module.exports = router;