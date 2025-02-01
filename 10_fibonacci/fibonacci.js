const fibonacci = function(n) {
    n = (+n);

    if (n === 0) return 0;
    if (n < 0) return "OOPS";
    
    let current = 1;
    let last = 0;
    let sum = 0;
    while (n > 1) {
        sum = current + last;
        last = current;
        current = sum;
        sum = 0;
        n--;
    }
    return current;

};

// Do not edit below this line
module.exports = fibonacci;
