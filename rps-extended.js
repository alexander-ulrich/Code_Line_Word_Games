// ROCK, PAPER, SCISSORS, LIZARD, SPOCK!!!

// RULES
const rules = {
  rock: {
    img: "()",
    scissors: "Rock crushes Scissors!",
    lizard: "Rock crushes Lizard!",
  },
  paper: {
    img: "[]",
    rock: "Paper covers Rock!",
    spock: "Paper disproves Spock!",
  },
  scissors: {
    img: "8<",
    paper: "Scissors cuts Paper!",
    lizard: "Scissors decapitates Lizard!",
  },
  lizard: {
    img: "",
    spock: "Lizard poisons Spock!",
    paper: "Lizard eats Paper!",
  },
  spock: {
    img: "",
    scissors: "Spock smashes Scissors!",
    rock: "Spock vaporizes Rock!",
  },
};
// Colors for Output
const red = "\x1b[31m";
const green = "\x1b[32m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const yellow = "\x1b[33m";
const reset = "\x1b[0m";

// Player Input
let args = process.argv.slice(2);

// Move Variables
let player = "";
let computer = "";
// Valid Moves
const moves = ["rock", "paper", "scissors", "lizard", "spock"];

// Final result Variables
let matchUp = "";
let result = cyan + "No Result!" + reset;
let message = cyan + "No Winner!" + reset;

// Check if Player sent a move
function checkEmptyInput() {
  if (args.length === 0) {
    //   Inform Player of forgotten Input and show List of valid Moves
    console.log(
      red +
        "ERROR: Player didn't select a Move! Please choose between: Rock, Paper, Scissors, Lizard and Spock!" +
        reset
    );
    process.exit(1);
  }
}
// Check if Player move is valid
function checkValidMove() {
  if (!moves.includes(player)) {
    //   Inform Player of invalid Move and show List of valid Moves
    console.log(
      red +
        "ERROR: Invalid Move! Please choose between: Rock, Paper, Scissors, Lizard and Spock!" +
        reset
    );
    process.exit(1);
  }
}
// Generate CPU Move and assign Player Input to Variable
function assignMoves() {
  checkEmptyInput();
  player = args[0].toString().toLowerCase();
  checkValidMove();
  computer = moves[Math.floor(Math.random() * moves.length)];
}
// Generate Match Up String
function generateMatchUpString() {
  matchUp =
    blue +
    " PLAYER" +
    cyan +
    " --| " +
    yellow +
    player.toUpperCase() +
    " " +
    blue +
    rules[player].img +
    cyan +
    " |--" +
    yellow +
    " VS" +
    cyan +
    " --| " +
    red +
    rules[computer].img +
    " " +
    yellow +
    computer.toUpperCase() +
    cyan +
    " |--" +
    red +
    " CPU" +
    reset;
}
// Game Logic
// Determine the result of current round
function determineResult() {
  // Check if Draw occurs
  if (player === computer) {
    result =
      magenta +
      ">=======================>" +
      yellow +
      " DRAW" +
      magenta +
      " <=====================<" +
      reset;
    // Check if Player wins
  } else if (rules[player][computer]) {
    result =
      magenta +
      ">========================>" +
      green +
      " WIN" +
      magenta +
      " <=====================<" +
      reset;
    message = rules[player][computer];
    // Generate Player Loss messages
  } else {
    result =
      ">=======================>" +
      red +
      " LOSS" +
      magenta +
      " <=====================<" +
      reset;
    message = rules[computer][player];
  }
}
// Output
// Prints out the Header
function printHeader() {
  console.log(
    magenta + "======================================================"
  );
  console.log(
    ">=====>" +
      cyan +
      " ROCK, PAPER, SCISSORS, LIZARD, SPOCK!" +
      magenta +
      " <======<"
  );
  console.log("======================================================" + reset);
}
// Prints out MatchUp, Message and Result for current round
function printRound() {
  console.log(matchUp);
  console.log(
    magenta + "======================================================" + reset
  );
  console.log(magenta + ">==============> " + cyan + message + reset);
  console.log(
    magenta + "======================================================" + reset
  );
  console.log(result);
  console.log(
    magenta + "======================================================" + reset
  );
}

// Gameplay Loop
printHeader();
assignMoves();
generateMatchUpString();
determineResult();
printRound();
