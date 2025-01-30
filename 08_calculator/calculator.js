const add = function(a, b) {
	return a + b; 
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, item) => acc * item, 1);
};

const power = function(a, b) {
	if (b === 0) return 1;
  if (b === 1) return a;
  let sum = 1;
  while (b > 0) {
    sum *= a;
    b--;
  }
  return sum;
};

const factorial = function(a) {
  if (a === 0) return 1;
  let sum = 1;
	while (a > 0) {
    sum *= a;
    a--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
