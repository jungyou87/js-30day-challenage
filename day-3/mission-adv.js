var str_1 = 'Help';
var str_2 = 'World, Hello!';

var str_one = 'Car';
var str_two = 'Tents';

let substring = '';

for (let j = 0; j < str_1.length; j++) {
    const letter_1 = str_1[j];
    for (let k = 0; k < str_2.length; k++) {
        const letter_2 = str_2[k];
        if (letter_1 == letter_2) {
            substring+=letter_2;
            break;
        } else {
            continue;
        }
        
    }
}

console.log(Boolean(substring));


// Using includes()

// var substring = ''

// for (let i = 0; i < str_1.length; i++) {
//     let char = str_1[i];

//     if (!str_2.includes(substring+char)) {
//         continue;
//     }
//     else {
//         substring+=char;
//     }
// }

// console.log(Boolean(substring.length));
