const pigLatin = (word) => {
    let newWord;
    const consonants = /[AaEeIiOoUu]/g;
    const firstLetter = word[0];
    if (firstLetter.match(consonants)) {
        newWord = word+"way";
    } else {
        newWord = word.slice(1)+firstLetter.toLowerCase()+"ay";
    }
    return newWord
}

console.log(pigLatin('Fire'));
console.log(pigLatin('California'));
console.log(pigLatin('Alaska'));
