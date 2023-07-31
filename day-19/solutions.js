// The Mission: Fibonacci

const num = 21;
const doYouEvenFibBro = (num) => {
  let fibber = [];
  let n1 = 1;
  let n2 = 0;
  let sum;

  for (let i = 0; i <= num; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    fibber.push(n2);
  }
  console.log(fibber);
  console.log(fibber.filter((a) =>  a % 2 && a <= num));
  return fibber
      .filter((a) =>  a % 2 && a <= num)
      .reduce((a, b) => a + b);
}

console.log('fib', doYouEvenFibBro(num));
