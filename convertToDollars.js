// converting raw number to a string
// then converts to an array
function dollaBill(rawNum) {
    strNum = rawNum.toString();
    var numSplit = strNum.split("");
    //console.log(numSplit);

    var x = 0;
    var dollaString = [];
    var realString = " ";
    //loop through the array to add a comma after three digits
    for (i = numSplit.length - 1; i >= 0; i--) {
        if (x < 3) {
            dollaString.unshift(numSplit[i]);
            x++;
        } else if (x = 3) {
            dollaString.unshift(",");
            x = 0;
            i++;
        }
    }
    dollaString.unshift('$');
    //console.log(dollaString);
    // loop through new array to re-convert to a string    
    for (d = 0; d < dollaString.length; d++) {
        realString += dollaString[d];
    }
    return realString;
}

//dollaBill(1234567);

module.exports = dollaBill;