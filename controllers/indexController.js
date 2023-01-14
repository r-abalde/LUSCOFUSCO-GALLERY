const request = require("request");

const indexART = (req, res) => {
    var options = { method: 'GET',
        url: 'http://127.0.0.1:5000/index'};
    return request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.sendFile( 'index.html',{root: 'templates'});
    });
};

module.exports = {
    indexART
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