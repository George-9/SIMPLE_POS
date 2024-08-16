const express = require('express');

const app = express();
const cors = require('cors');
const path = require('path');

const limit = '300mb';

app.use(cors());
app.use(express.urlencoded({ 'extended': true, 'limit': limit }));
app.use(express.json({ 'limit': limit }));
app.use(express.static(path.join('./public'), { index: false, extensions: ['html'] }));

module.exports = { app }