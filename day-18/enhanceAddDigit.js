const addDigit = (num) => {
    let done = false;
    let result = 0;
    let counter = 0;
    while (!done) {
        let remainder = num%10; //  7 //8  // 7
        // console.log(remainder);
        result += (remainder+1)*(10**counter); 
        // console.log(result); // 8 //98
        if ( remainder+1 == 10) {
            counter+=2;
        } else {
            counter++; // 2
        }
        num = Math.floor(num/10); // 78 // 7 // 0
        // console.log(num);
        
        if (num > 1) {
            done = false;
        } else {
            done = true;
        }
    }
    return result;
}

console.log(addDigit(787));
console.log(addDigit(998));