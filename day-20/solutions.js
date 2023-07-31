// The Mission: Pig Latin

const pigLatin= (str) => {
    let vowels = ["a", "e", "i", "o", "u"];
  
    if (vowels.indexOf(str[0]) > -1) {
      return `${str}way`;
    } else {
      const firstMatch = str.match(/[aeiou]/g) || 0;
      console.log(firstMatch);
      const vowel = str.indexOf(firstMatch[0]);
      console.log(vowel);
      console.log(str.substr(vowel), str.substr(0, vowel));
      return `${str.substr(vowel)}${str.substr(0, vowel)}ay`;
    }
  }
  
  console.log(pigLatin("alpha"));
  console.log(pigLatin("fire"));