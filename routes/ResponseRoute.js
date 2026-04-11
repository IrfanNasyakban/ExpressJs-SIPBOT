const express = require("express");
const {
    getResponse
} = require("../controllers/ResponseController.js") 

const router = express.Router()

router.get('/', getResponse)

module.exports = router;