const express = require('express');
const request = require('request');
const app = express();
const ejs = require('ejs');
//conexion con mongo
const {MongoClient} = require("mongodb");
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
const bodyParser = require('body-parser');
path = require('path');
app.use(express.json());
app.use(express.static(path.join('../app')));
app.use(bodyParser.urlencoded());


/*Get for full online gallery */
const galleryART = (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    const url = "mongodb+srv://ud:ud@cluster0.szg5vgf.mongodb.net/?retryWrites=true&w=majority";
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db('luscofusco');
        db.collection('artgallery').find({}).toArray(function (findErr, art) {
            if (findErr) throw findErr;
            /*
            for (let i = 0; i < art.length; i++) {
                console.log("tres");
                console.log(art[i]);
            }*/
            res.render('gallery.ejs', {artList: art});

            client.close();
        });
    });

};


module.exports = {
    galleryART
};



/*Flask functions*/
/*
const loginARTPOST = (req, res) => {
    var options = { method: 'POST',
        url: 'http://127.0.0.1:5000/login'};
    return request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.sendFile('login.html',{root: 'views'});
    });
};
const loginARTGET = (req, res) => {
    request('http://127.0.0.1:5000/login', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(body); //Display the response on the website
    });
};

const logoutART = (req, res) => {
    request('http://127.0.0.1:5000/logout', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(body); //Display the response on the website
    });
};

const registerARTGET = (req, res) => {
    var options = { method: 'GET',
        url: 'http://127.0.0.1:5000/register'};
    console.log("get")
    return request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.sendFile( 'register.html',{root: 'views'});
    });

};
const registerARTPOST = (req, res) => {
    var options = { method: 'POST',
        url: 'http://127.0.0.1:5000/register'};
    console.log("post")
    return request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.sendFile('register.html',{root: 'views'});
    });
};

*/
