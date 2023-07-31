var colors = ['blue', 'red', 'green','yellow', 'black', 'white'];
var upperColors = colors.map(x => x.toUpperCase());

console.log(upperColors);

var numbers = [-1, -2, 20, 60, 77];
var greaterThanZero = numbers.every((y)=> y > 0);

console.log(greaterThanZero);