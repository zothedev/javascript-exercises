const reverseString = function(str) {
    let i = str.length-1;
    let finalStr = "";
    while (i >= 0) {
        finalStr += str[i];
        i--;
    }
    return finalStr;
};

// Do not edit below this line
module.exports = reverseString;
