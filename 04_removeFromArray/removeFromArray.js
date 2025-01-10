const removeFromArray = function(...theArgs) {
    // ( [1, 2, 3, 4], 3 )
    let newArray = [];
    let nums = theArgs.shift();
    
    for (let num of nums) {
        if (theArgs.includes(num)) continue;

        newArray.push(num);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
