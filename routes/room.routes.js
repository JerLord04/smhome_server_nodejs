const fs = require('fs');
const express = require('express');
const router = express.Router();

const roomController = require("../controllers/room.controller");
// const authController = require("../controllers/auth.controller")

// router.get('/testAuth',authController.test);
router.post('/get_room_name',roomController.getRoomName);
router.post('/get_all_room_name',roomController.getAllRoomName)
router.post('/change_room_name',roomController.changeRoomName)


module.exports = router;
