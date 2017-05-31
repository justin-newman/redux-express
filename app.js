const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notes = require('./routes/notes');
mongoose.connect('mongodb://localhost/change-me');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));

//API ROUTES - React Code
app.use('/api/notes', notes);

app.get('*', (request, response) => {
   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
