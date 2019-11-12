const http = require('http');
const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/views'));


module.exports = app;