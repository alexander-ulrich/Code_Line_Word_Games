// alphabet for shift index
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// List for special characters
const specialChars = [
  " ",
  "ä",
  "ö",
  "ü",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "?",
  "_",
  "=",
  ",",
  "<",
  ">",
  "/",
  ".",
];

// Input
let input = process.argv.slice(2);
let shiftValue = parseInt(input.pop());
let sentence = input.join(" ");
// console.log(input);
console.log("Shift Value: " + shiftValue);
console.log("Input: " + sentence);

function encodeSentence(sentence, shiftValue) {
  let encodedSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i);

    let encodedValue = 0;
    if (alphabet.includes(char.toLowerCase())) {
      if (shiftValue <= 0) {
        shiftValue = shiftValue % -25;
      } else {
        shiftValue = shiftValue % 25;
      }
      encodedValue = alphabet.indexOf(char) + shiftValue;
    } else {
      encodedSentence += char;
      continue;
    }

    encodedSentence += alphabet[encodedValue];
  }

  return encodedSentence;
}
// encodeSentence(sentence, shiftValue);
console.log(encodeSentence(sentence, shiftValue));
