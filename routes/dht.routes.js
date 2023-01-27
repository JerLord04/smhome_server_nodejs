const fs = require('fs');
const express = require('express');
const router = express.Router();

const dhtController = require("../controllers/dht.controller");
// const authController = require("../controllers/auth.controller")

router.get('/get_humi_data',dhtController.get_humidity_data);
router.get('/get_tem_data',dhtController.get_temperature_data);



module.exports = router;
