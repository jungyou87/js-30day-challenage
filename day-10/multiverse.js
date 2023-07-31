var multiArr1 = [[1,2,3],[4,5,6]];
console.log(multiArr1);

var multiArr2 = [[7,8],[9,10],[11,12]];
console.log(multiArr2);

var result = [];

console.log(1*7 + 2*9 + 3*11);
console.log(1*8 + 2*1 + 3*12);
console.log(4*7 + 5*9 + 6*11);
console.log(4*8 + 5*10 + 6*12);

for (let i = 0; i < multiArr1.length; i++) {
    const arr = multiArr1[i];
    let inner = [];
    let sum1 = 0;
    console.log(i);

    for (let j = 0; j < multiArr2.length; j++) {
        let product = 0;
        const num1 = multiArr1[i][j];
        const num2 = multiArr2[j][i];
        
        product = num1 * num2;
        sum1 = sum1+product;
    }
    console.log(sum1);
    inner.push(sum1)

    // console.log(i);
    result.push(inner)
    
}

console.log(result);

// 0,0 * 0,0 
// 0,1 * 1,0
// 0,2 * 2,0
//  =>  sum 

// 0,0 * 0,1;
// 0,1 * 1,1;
// 0,2 * 2,1;

// 1,0 * 0,0;
// 1,1 * 1,0;
// 1,2 * 2,0;

// 1,0 * 0,1;
// 1,1 * 1,1;
// 1,2 * 2,1;
