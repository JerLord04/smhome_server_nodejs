const fs = require('fs');
const express = require('express');
const router = express.Router();

const deviceController = require("../controllers/devices.controll");
// const authController = require("../controllers/auth.controller")
const deleteDuplicate = require("../controllers/middleware/deleteDuplicate")

// router.get('/testAuth',authController.test);
router.post('/insert_device',deleteDuplicate.deleteDuplicate,deviceController.insert_device);
router.post('/delete_device',deviceController.delete_device);



module.exports = router;
