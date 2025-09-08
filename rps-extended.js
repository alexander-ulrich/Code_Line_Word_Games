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

// Player Input
const args = process.argv.slice(2);
// Check if Player sent a move
if (args.length === 0) {
  //   Inform Player of forgotten Input and show List of valid Moves
  console.log(
    "ERROR: Player didn't select a Move! Please choose between: Rock, Paper, Scissors, Lizard and Spock!"
  );
  return;
}
const player = args[0].toString().toLowerCase();

// Moves to validate Player Input
const moves = ["rock", "paper", "scissors", "lizard", "spock"];
// Check if Player move is valid
if (!moves.includes(player)) {
  //   Inform Player of invalid Move and show List of valid Moves
  console.log(
    "ERROR: Invalid Move! Please choose between: Rock, Paper, Scissors, Lizard and Spock!"
  );
  return;
}
// Generate CPU move
const computer = moves[Math.floor(Math.random() * moves.length)];
// Final result Variables
let result = "No Result!";
let message = "No Winner!";

// Generate Match Up String
const matchUp =
  "PLAYER --|" +
  player.toUpperCase() +
  " " +
  rules[player].img +
  "|-- VS --|" +
  rules[computer].img +
  " " +
  computer.toUpperCase() +
  "|-- CPU";

// Game Logic
// Check if Draw occurs
if (player === computer) {
  result = "DRAW";
  // Check if Player wins
} else if (rules[player][computer]) {
  result = "WIN";
  message = rules[player][computer];
  // Generate Player Loss messages
} else {
  result = "LOSS";
  message = rules[computer][player];
}

// Output
console.log(matchUp);
console.log(result);
console.log(message);
