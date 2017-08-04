var express = require('express');
var random = require('./randomNumber');
var convert = require('./convertToDollars.js')
var app = express();
var port = 3000;

console.log(random(100, 1000000));
console.log(convert(1234567));

app.listen(port, function() {
    console.log('listening on port', port);
})