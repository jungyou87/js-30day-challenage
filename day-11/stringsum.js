function stringSum (str) {
    let pattern = /[0-9]/g;
    let numInStr = str.match(pattern);

    if (!numInStr) {
        return 0
    } else {
        let sum = 0
        for (let i = 0; i < numInStr.length; i++) {
            const num = parseInt(numInStr[i]);
            sum += num;
        }
        return sum;
    }
}

console.log(stringSum('123SDFA643SD!$'));
console.log(stringSum('!@#!@$%@#$!WERERADSF'));
