function sumRange(num1, num2) {
    let arr = [num1, num2].sort((a,b)=> a-b);
    // console.log(arr);
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum = sum+i;
    }
    return sum;
}

console.log(sumRange(4,1));
