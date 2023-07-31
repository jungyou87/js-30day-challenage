
function digits (num) {
    let sum=0;
    while (num >= 10) {
        remainder = num%10;
        sum = sum+remainder;
        num = parseInt(num/10)
    }
    return sum + num;
}

console.log(digits(5051));
