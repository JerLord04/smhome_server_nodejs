const fs = require('fs');
const express = require('express');
const router = express.Router();

const testSocket = require("../socketsController/test.socket.controller");
const light_bulb_controller = require('../socketsController/light_bulbController')
const door_status = require("../socketsController/door_sensor_controller")
const getHumiAndTempData = require("../socketsController/humi_and_temp.Controller")

router.post('/socket_test',testSocket.testApi);
router.get('/light_bulb_command_on',light_bulb_controller.light_bulb_command_on);
router.get('/light_bulb_command_off',light_bulb_controller.light_bulb_command_off);
router.get('/get_door_status',door_status.door_status);
router.get('/get_door_lastest_state',door_status.doorLastestState);
router.get('/humiAndTempData',getHumiAndTempData.insertHandT);


module.exports = router;