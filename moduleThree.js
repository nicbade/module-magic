var convertToDollars = require('./convertToDollars');
var randomNumber = require('./randomNumber.js');
var formatBalance = "";
var randomBalance = 0;


function getBalance() {
    randomBalance = randomNumber(100, 1000000);
    return randomBalance;

}

function convertBalance() {
    getBalance();
    formatBalance = convertToDollars(randomBalance);
    return formatBalance;
}

function textString() {
    return "Account balance: \n"
}

module.exports = {
    convertBalance: convertBalance(),
    textString: textString()
};