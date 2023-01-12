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


/*Get with only the pieces owned by the gallery */
const shopART = (req, res, next) => {
    var MongoClient = require('mongodb').MongoClient;
    const url = "mongodb+srv://ud:ud@cluster0.szg5vgf.mongodb.net/?retryWrites=true&w=majority";
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db('luscofusco');
        db.collection('artgallery').find({ownedBy: "Luscofusco"}).toArray(function (findErr, art) {
            if (findErr) throw findErr;

            res.render('galleryShop.ejs', {artList: art});

            client.close();
        });
    });
};

module.exports = {
    shopART
};