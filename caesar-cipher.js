// Alphabet for shift index
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

// Input
let input = process.argv.slice(2);
let shiftValue = parseInt(input.pop());
let sentence = input.join(" ").toLowerCase();

console.log("Shift Value: " + shiftValue);

// Logic
function encodeSentence(sentence, shiftValue) {
  // Return variable
  let encodedSentence = "";
  // Shorten Shift Value using Modulo
  if (shiftValue <= 0) {
    shiftValue = shiftValue % -alphabet.length;
  } else {
    shiftValue = shiftValue % alphabet.length;
  }
  console.log("Shortened Shift Value: " + shiftValue);
  // Iterate over each character of our sentence
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i);
    let encodedValue = 0;
    // Check for special characters
    if (alphabet.includes(char)) {
      encodedValue = alphabet.indexOf(char) + shiftValue;
    } else {
      encodedSentence += char;
      continue;
    }
    // Add shifted character to return variable
    if (encodedValue < 0) {
      encodedSentence += alphabet[alphabet.length + encodedValue];
    } else {
      if (encodedValue >= alphabet.length) encodedValue -= alphabet.length;
      encodedSentence += alphabet[encodedValue];
    }
  }
  console.log("Input: " + sentence);
  return encodedSentence;
}

console.log("Encoded Input: " + encodeSentence(sentence, shiftValue));
