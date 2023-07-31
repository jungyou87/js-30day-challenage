var words = ['ant', 'awkward', 'car','zebra'];
// console.log(words.reverse());

let revWords = [];
for (let i = words.length-1; i >= 0 ; i--) {
    const word = words[i];
    revWords.push(word);
}

console.log(revWords);