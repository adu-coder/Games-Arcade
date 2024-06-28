let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerScore = 0;
let computerScore = 0;
let draws = 0;

let playerChoice = "";
let computerChoice = "";

let display = document.querySelector(".game");

let reset = document.querySelector("#reset");

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playerChoice = choice.getAttribute("id");
    compSelect();
    checkWinner();
    updateScores();
  });
});

const compSelect = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) computerChoice = "stone";
  if (randomNumber === 2) computerChoice = "paper";
  if (randomNumber === 3) computerChoice = "scissors";
};

const checkWinner = () => {
  if (playerChoice === computerChoice) {
    display.innerText = `Computer chose ${computerChoice}, Match Draw`;
    draws++;
  } else if (bigger(playerChoice, computerChoice)) {
    display.innerText = `Computer chose ${computerChoice}, You Won!!! `;
    playerScore++;
  } else {
    display.innerText = `Computer chose ${computerChoice}, Computer Won!!!`;
    computerScore++;
  }
};

const bigger = (c1, c2) => {
  if (
    (c1 === "stone" && c2 === "scissors") ||
    (c1 === "scissors" && c2 === "paper") ||
    (c1 === "paper" && c2 === "stone")
  )
    return true;
  else return false;
};

const updateScores = () => {
  document.querySelector("#playerScore").innerText = playerScore;
  document.querySelector("#computerScore").innerText = computerScore;
};

reset.addEventListener("click",()=>{
  playerScore=0;
  computerScore=0;
  updateScores();
  display.innerText="";
})