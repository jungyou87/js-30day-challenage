// Part 1: Longest String

// Write a function that accepts an array of strings.
// Return the longest string. Example array: ["hello", "Joe", "Card"]
// Would return: "hello"

const strings = ["Hello", "Joe", "Card", "Mississippi"];

// const boomer = (strArr) => strArr.reduce((a, b) => a.length > b.length ? a : b);
// const boomer = (strArr) => strArr.sort((a, b) => b.length - a.length)[0];

// console.log(boomer(strings));

// Part 2: Junk

// Create a function that takes a string as a parameter.
// If the string contains certain symbols, remove the symbols, replace each one with a space, and then return a new string.
// Symbols to remove: { } [ ] ! < > ( )

const specialChars = "{}[]!<>()";
let junkString = "I{love}to<code>everyday.[Do!you(like)cats?]"

// const replaceJunk = (string) => string.replace(/[{}\[\]!<>()]/g, " ");


const replaceJunk = (string, chars) => {
  for (let i = 0; i < chars.length; i++) {
    string = string.replace(new RegExp("\\" + chars[i], "g"), " ");
  }
  return string;
}

// console.log(replaceJunk(junkString));
console.log(replaceJunk(junkString, specialChars));