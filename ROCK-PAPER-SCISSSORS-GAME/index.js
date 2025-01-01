const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const results = document.querySelector("#result");
const subResult = document.querySelector("#subResult");
const resetBtn = document.querySelector("#resetBtn");
const myResult = document.querySelector("#myResult");



// Initialize score from localStorage or set default
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Update the subResult UI based on the score
function updateScoreDisplay() {
  subResult.textContent = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

// Function to pick computer move
function pickComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to play the game
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === computerMove) {
    result = "draw";
    score.ties += 1;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "you win";
    score.wins += 1;
  } else {
    result = "you lose";
    score.losses += 1;
  }

  myResult.textContent = `${result}`;
  results.innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreDisplay();
}

// Function to reset the score
function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("score");
  updateScoreDisplay();
  results.textContent = "";
  myResult.textContent = "";
}


let autoPlaying = false;
let intervalId;

// Function to auto-play the game
function autoPlay() {
  if (!autoPlaying) {
    intervalId =  setInterval(() => {
      const playerMove = pickComputerMove(); // Simulating a random player move
      playGame(playerMove);
    }, 1000);
    autoPlaying = true;
  } else{
    clearInterval(intervalId)
    autoPlaying = false;
  }
}

// Event listeners for buttons
document.body.addEventListener('keydown', (event) => {
     if (event.key === 'r') {
      playGame('rock')
     } else if (event.key === "s") {
      playGame("scissors")
     } else if (event.key === "p") {
      playGame("paper")
     }
})


rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
resetBtn.addEventListener("click", resetScore);

// Initialize UI with stored score
updateScoreDisplay();