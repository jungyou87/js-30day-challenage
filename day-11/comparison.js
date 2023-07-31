function exercise1(num) {
    let diff = 27-num;
    if (diff < 0 ) {
        return (diff*-2);
    } else {
        return diff;
    }
}
console.log(exercise1(50));
console.log(exercise1(24));

function exercise2(num1, num2) {
    if (num1 === num2) {
        return num1*6;
    } else {
        return num1 + num2;
    }

}
console.log(exercise2(12, 12));
console.log(exercise2(12 ,10));

function exercise3(num1, num2) {
    if (num1 === 40 || num2 === 40) {
        return true;
    } else if ( num1 + num2 === 40) {
        return true;
    } else {
        return false;
    }
}
console.log(exercise3(40,40));
console.log(exercise3(20,20));
console.log(exercise3(30,25));
console.log(exercise3(35,5));