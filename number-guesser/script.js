let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9) + 1;
};

const compareGuesses = (userGuess, computerGuess, target) => {
  target = generateTarget();

  if (userGuess < 0 || userGuess > 9) {
    alert("Invalid guess. Please enter a number between 0 and 9");
  } else {
    userDifference = Math.abs(target - userGuess);
    computerDifference = Math.abs(target - computerGuess);

    if (userDifference <= computerDifference) {
      return true;
    } else {
      return false;
    }
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    return computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
