//Conexión con sql
var Connection = require('tedious').Connection;
var config = {
    server: 'localhost',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'root', //update me
            password: 'amoramor0.'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'luscologin'  //update me
    }
};
var connection = new Connection(config);
connection.on('connect', function(err) {
    // If no error, then good to proceed.
    console.log("Connected");
});

connection.connect();

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
