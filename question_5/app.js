// THIS IS TAKEN FROM THE MOVIES API PROJECT WHICH I CREATED AND ALSO MENTIONED IN MY DAILY LOGS WHILE LEARNING NODEJS


const express = require('express');
const morgan = require('morgan');
const moviesRouter = require('./routes/moviesRoutes');

let app = express();

app.use(express.json());

app.use(express.static('./public'));

app.use('/api/v1/movies', moviesRouter);

module.exports = app;

