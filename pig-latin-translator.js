// Colors for Output
const red = "\x1b[31m";
const green = "\x1b[32m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const yellow = "\x1b[33m";
const reset = "\x1b[0m";

//List of vowels
const vowels = ["a", "e", "i", "o", "u"];
// Input
let args = process.argv.slice(2);
// Variables for returned values
let sanitizedArgs = [];
let translatedArgs = [];
let capitalization = [];
let translation = "";

function sanitizeInput(array) {
  let result = [];
  array.forEach((element) => {
    result.push(element.trim().split(" "));
  });
  return result.flat();
}
function preserveCapitalization(array) {
  capitalization = [];
  array.forEach((element) => {
    if (element.charAt(0) == element.charAt(0).toUpperCase()) {
      capitalization.push(true);
    } else {
      capitalization.push(false);
    }
  });
  return capitalization;
}
function checkValidInput(args) {
  if (args.length === 0) {
    //   Inform Player of forgotten Input
    console.log(
      red + "ERROR: Player didn't submit any text to translate!" + reset
    );
    process.exit(1);
  }
  args.forEach((element) => {
    if (element.split("").some((char) => !isNaN(char))) {
      console.log(
        red +
          "ERROR: Text contains invalid characters (numbers, whitespace) and can't be translated!" +
          reset
      );
      process.exit(1);
    }
    // console.log("Input is valid!");
  });
}
// Game Logic
function translate(args) {
  const translatedArgs = [];
  args.forEach((element) => {
    element = element.toLowerCase();
    switch (true) {
      case vowels.includes(element.charAt(0)):
        translatedArgs.push(element + "way");
        break;
      case !vowels.includes(element.charAt(0)) &&
        vowels.includes(element.charAt(1)):
        translatedArgs.push(element.slice(1) + element.charAt(0) + "ay");
        break;
      case !vowels.includes(element.charAt(0)) &&
        !vowels.includes(element.charAt(1)):
        translatedArgs.push(element.slice(2) + element.slice(0, 2) + "ay");
        break;
      default:
    }
  });
  return translatedArgs;
}

function recapitalize(args, capitalization) {
  for (i in args) {
    if (capitalization[i]) {
      args[i] = args[i].charAt(0).toUpperCase() + args[i].slice(1);
      console.log(args[i]);
    }
  }
  return args;
}
sanitizedArgs = sanitizeInput(args);
capitalization = preserveCapitalization(sanitizedArgs);
checkValidInput(sanitizedArgs);
console.log(sanitizedArgs);
translatedArgs = translate(sanitizedArgs);
translatedArgs = recapitalize(translatedArgs, capitalization);
translation = translatedArgs.join(" ");
console.log(translation);
