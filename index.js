var express = require('express');
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const port = process.env.PORT;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const roomDevice = require('./routes/roomDevice.routes')
const devices = require('./routes/devices.routes')
const dht = require('./routes/dht.routes')
const auth = require('./routes/auth.routes')
const room = require('./routes/room.routes')
const pin = require('./routes/pin.routes')
const socket_api = require('./socketRoutes/socket.routes')


// const test_listen = require('./socketsController/testListenClient')

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use('/', roomDevice);
app.use('/devices', devices);
app.use('/dht', dht)
app.use('/auth', auth)
app.use('/room', room)
app.use('/pin', pin)
app.use('/api', socket_api);



server.listen(port, () => {
    console.log(`listen to PORT : ${port}`);
});