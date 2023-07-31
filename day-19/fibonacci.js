const fibonacci = (num) => {
    let fibArr = [1, 1];

    while (fibArr[fibArr.length-1] <= num) {
        let numToAdd = fibArr[fibArr.length-2] + fibArr[fibArr.length-1];
        // console.log(numToAdd);
        if (numToAdd <= num) {
            fibArr.push(numToAdd);
        } else {
            break;
        }
    }
    return fibArr;
}


const fibSum = (num) => fibonacci(num).reduce(function (acc, cur) {
    cur %2 == 0? cur=0 : cur 
    return acc+cur
} ,0)

console.log(fibonacci(10));
console.log(fibSum(10));