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


/*Page with search results */
const searchART = (req, res, next) => {
    var MongoClient = require('mongodb').MongoClient;
    const url = "mongodb+srv://ud:ud@cluster0.szg5vgf.mongodb.net/?retryWrites=true&w=majority";
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db('luscofusco');
        db.collection('artgallery').find({$or: [ {title: req.body.nameArt},{author: req.body.nameArt}]}).toArray(function (findErr, art) {
            if (findErr) throw findErr;

            res.render('galleryResults.ejs', {artList: art});

            client.close();
        });
    });
};


//Exportar los modulos para ser recibidos por routes.js
module.exports = {
    searchART
};
