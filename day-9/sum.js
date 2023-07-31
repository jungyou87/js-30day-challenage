var odds = [5,8,14,13,29,98];
var evens = [11,6,2,87,43,22,104];

odds = odds.filter(function (num) {
    if (num%2 !=0) {
        return num
    }
})

console.log(odds);

evens = evens.filter(function (num) {
    if (num%2 ==0) {
        return num
    }
})

console.log(evens);

var oddSum = odds.filter(function (num) {
    if (num%2 !=0) {
        return num
    }
}).reduce((acc,cur)=> {
    return acc+cur;
})

var evenSum = evens.filter(function (num) {
    if (num%2 ==0) {
        return num
    }
}).reduce((acc,cur)=> {
    return acc+cur;
})

var totalSum = evenSum + oddSum;
console.log(totalSum);