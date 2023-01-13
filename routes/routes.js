const express = require('express'); //import express
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
const artSearchController = require('../controllers/gallerySearchController');
const artShopController = require('../controllers/galleryShopController');
const artController = require('../controllers/galleryController');
const indexController = require('../controllers/indexController');

//nodejs functions
router.get('/gallery', artController.galleryART);
router.get('/galleryShop', artShopController.shopART);
router.post('/galleryResults', artSearchController.searchART);

//flask functions
router.get('/', indexController.indexART);

// 4.
module.exports = router;