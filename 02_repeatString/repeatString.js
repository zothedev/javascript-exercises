const repeatString = function(str, num) {
    let repeatStr = "";
    if (num < 0) {
        return 'ERROR';
    }
    while (num >= 1) {
        repeatStr += str
        num--;
    }
    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
