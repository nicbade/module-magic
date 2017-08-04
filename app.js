var express = require('express');
var random = require('./randomNumber');
var convert = require('./convertToDollars.js');
var modulator = require('./moduleThree.js');

var balance = 0;
var app = express();
var port = 3000;
balance = modulator.convertBalance;
var customerBalance = modulator.textString + balance;

console.log(customerBalance);
app.use(express.static('public'));

app.get('/balance', function(req, res) {
        res.send(customerBalance);
    })
    // console.log(random(100, 1000000));
    // console.log(convert(1234567));

app.listen(port, function() {
    console.log('listening on port', port);
})