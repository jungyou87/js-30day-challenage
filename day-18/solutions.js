// Part 1: Add Digit

// Create a function that takes any number.
// Add 1 to each of the digits of the number and return that value.
// Example: If you passed in 787 you would return 898.
// If you passed in 998 it would return 10109

const num1 = 787;
const stringDigit = (num) => {
  const newNum = [];
  Array.from(num.toString()).map((n => {
    newNum.push(Number(n) + 1);
  }));
  return +newNum.join("");
}
console.log(stringDigit(num1));

// Part 2:
// If you used any String or String functions to solve part 1
// you must now solve the same problem without any strings

const num2 = 998;
const numericDigit = (num) => {
  let digit = 0;
  let m = 1;
  while(num > 0) {
    let r = num % 10;
    num = Math.floor(num % Math.pow(num, 10) / 10);
    digit += (r + 1) * m;
    m *= (r === 9) ? 100 : 10;
  }
  return digit;
};

console.log(numericDigit(num2));