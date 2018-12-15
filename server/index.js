const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const RED = require('node-red');
const dotenv = require('dotenv');
const settings = require('./config/settings')

dotenv.config();
envPath = path.resolve(process.cwd() + "/config", '.env.' + process.env.NODE_ENV);
if (process.env.NODE_ENV && fs.existsSync("./config/.env." + process.env.NODE_ENV)) {
    require('dotenv').config({path: envPath});
}

const app = express();
const server = http.createServer(app);
RED.init(server, settings);

app.use('/admin', RED.httpAdmin);
app.use('/api', RED.httpNode); // relative http path, also in settings.js

RED.start()

server.listen(process.env.PORT);


