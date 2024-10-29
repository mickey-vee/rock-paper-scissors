// Function to return rock, paper, or scissors depending on a random number
function getComputerChoice() {
  const computer = Math.random();

  if (computer > 0.66) {
    return "rock";
  } else if (computer > 0.33) {
    return "paper";
  }
  return "scissors";
}

// Initalizing scores
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  const outcomes = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (humanChoice === computerChoice) {
    return "Game is a tie";
  }

  if (outcomes[humanChoice] === computerChoice) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

// Main game function
function playGame() {
  // Prompt user for rock, paper, or scissors choice and set to lowercase
  let getHumanChoice = prompt("Rock, paper, or scissors?").toLowerCase();

  // Validate user input
  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(getHumanChoice)) {
    console.log("Invalid input. Please choose rock, paper, or scissors.");
    return; // Exit the function if the input is invalid
  }

  const computerChoice = getComputerChoice();
  const result = playRound(getHumanChoice, computerChoice);

  console.log(result);
  console.log(`Computer score: ${computerScore} Human score: ${humanScore}`);
}

playGame();
