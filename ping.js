var request = require('request');

var url = 'https://dedupify-email-api.herokuapp.com/';

request(url, function () {
    console.log('PONG')
});