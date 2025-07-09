function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log('Welcome to Simple Calculator!');
console.log('2 + 3 =', add(2, 3));
console.log('5 - 2 =', subtract(5, 2));

module.exports = { add, subtract };