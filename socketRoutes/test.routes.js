const fs = require('fs');
const express = require('express');
const router = express.Router();

const testSocket = require("../socketsController/test.socket.controller");

router.post('/socket_test',testSocket.testApi);

module.exports = router;