let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winnerTag = document.querySelector(".winnerTag");

let turn = "X";
let count = 0;
let flag = 0;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turn;
    count++;
    if (turn === "X") turn = "O";
    else turn = "X";
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        displayWinner(pos1Val);
        flag = 1;
      }
    }
  }
  if (count === 9 && flag === 0) displayWinner("Draw");
};

const displayWinner = (winner) => {
  winnerTag.innerText = `${winner} is the Winner!!!`;
  if (winner === "Draw") winnerTag.innerText = `Match Draw`;
  winnerTag.classList.remove("hide");
  disableButtons();
};

const disableButtons = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

winnerTag.addEventListener("click", () => {
  winnerTag.classList.add("hide");
  enableButtons();
});

reset.addEventListener("click", () => {
  enableButtons();
});

const enableButtons = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  count = 0;
  flag = 0;
};
