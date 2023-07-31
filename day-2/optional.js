// Day 2 mission optional

var str = 'Hello World';
console.log(str);

// part 1

var revStr = str.split('').reverse().join('');
console.log(revStr);

// part 2

var strReverse = ''
for (let i= str.length-1; i >= 0 ; i--){
    strReverse+=str[i]
}

console.log(strReverse);