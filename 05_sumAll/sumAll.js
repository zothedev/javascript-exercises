const sumAll = function(x, y) {
    let num = 0;

    if ((x < 0 || y < 0) || 
    (x % 1 !== 0 || y % 1 !== 0) ||
    (typeof x !== "number") || (typeof y !== "number")) {
        return 'ERROR';
    }

    // if y is greater than x, flip the values.
    if (y < x) {
        let z = x;
        x = y;
        y = z;
    }

    for (let i = x; i <= y; i++) {
        num += i;
    }
    return num;
};

// Do not edit below this line
module.exports = sumAll;
