var product = 1;

function fact(num) {
    if (num == 0) {
        return 1*product;
    } else if (num == 1) {
        return 1*product;
    } else {
        product *= num;
        return fact(num-1);
    }
}

console.log(fact(6));

product = 1;
console.log(fact(8));

product = 1;
console.log(fact(101));

product = 1;
console.log(fact(16));

product = 1;
console.log(fact(49));