const express = require ('express');
const mongoose = require('mongoose');
const request = require('request');
const app = express();
const ejs = require('ejs');
const {MongoClient} = require("mongodb");
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
const bodyParser = require('body-parser');
path = require('path');
app.use(express.json());
app.use(express.static(path.join('../app')));
app.use(bodyParser.urlencoded());
const routes = require('./routes/routes'); // import the routes


app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
