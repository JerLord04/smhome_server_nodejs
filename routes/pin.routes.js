const fs = require('fs');
const express = require('express');
const router = express.Router();

const pinController = require("../controllers/pin.controller");
// const authController = require("../controllers/auth.controller")

// router.get('/testAuth',authController.test);
router.post('/insert_pin',pinController.insert_pin);
router.get('/count_pin',pinController.count_pin);


module.exports = router;
