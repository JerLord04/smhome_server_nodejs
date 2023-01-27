const fs = require('fs');
const express = require('express');
const router = express.Router();
const authVerify = require('../controllers/middleware/authMiddleware')

const authController = require("../controllers/auth.controller");
// const authController = require("../controllers/auth.controller")

// router.get('/testAuth',authController.test);
router.post('/generate_token',authController.generate_token);
router.post('/verify_token' , authVerify.verifyToken ,authController.verifyToken)

module.exports = router;
