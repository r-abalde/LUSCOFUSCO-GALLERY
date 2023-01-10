const express = require('express'); //import express
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

// 1.
const router  = express.Router();
// 2.
const artController = require('../controllers/controllers');

//nodejs functions
router.get('/', artController.galleryART);
router.get('/galleryShop', artController.shopART);
router.post('/galleryResults', artController.searchART);

//flask functions
//router.get('/index', artController.indexART);
// 4.
module.exports = router;