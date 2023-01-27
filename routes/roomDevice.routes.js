const fs = require('fs');
const express = require('express');
const router = express.Router();

const roomDeviceController = require("../controllers/roomDevice.controller");
// const authController = require("../controllers/auth.controller")

// router.get('/testAuth',authController.test);
router.get('/roll_data_room1',roomDeviceController.rooldataRoom1);
router.get('/roll_data_room2',roomDeviceController.rooldataRoom2);
router.get('/roll_data_room3',roomDeviceController.rooldataRoom3);
router.get('/roll_data_room4',roomDeviceController.rooldataRoom4);


module.exports = router;
