var express = require('express');
const app = express()
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

const roomDevice = require('./routes/roomDevice.routes')
const devices = require('./routes/devices.routes')
const dht = require('./routes/dht.routes')
const auth = require('./routes/auth.routes')

app.use('/', roomDevice);
app.use('/devices', devices);
app.use('/dht',dht)
app.use('/auth',auth)

app.listen(port, () => {
    console.log(`listen to PORT : ${port}`);
});