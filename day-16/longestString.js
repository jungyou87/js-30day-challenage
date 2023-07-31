function longestString(arrOfStr) {
    let longestLength = 0;
    let longestString;
    for (let i = 0; i < arrOfStr.length; i++) {
        let word = arrOfStr[i];
        let lengthOfStr = word.length;
        if (lengthOfStr > longestLength) {
            longestLength = lengthOfStr;
            longestString = word;
        } else {
            continue;
        }
    }
    return longestString;
}

console.log(
    longestString( ['hello', 'Joe', 'Card'])
);
