function compPlay() {
  const rand = Math.floor(Math.random() * 3) + 1;
  const compContainer = document.querySelector(".compContainer");
  compContainer.innerHTML = "";
  const compImg = document.createElement("img");
  if (rand === 1) {
    compImg.src = "img/rock.jpg";
  } else if (rand === 2) {
    compImg.src = "img/paper.jpg";
  } else if (rand === 3) {
    compImg.src = "img/scissor.jpg";
  }
  compImg.classList.add("selectedAction");
  compContainer.appendChild(compImg);
  return rand;
}
function playerPlay() {
  const choice = prompt("Choose your option");
  if (choice === "1" || choice.toLowerCase() === "rock") {
    return 1;
  } else if (choice === "2" || choice.toLowerCase() === "paper") {
    return 2;
  } else if (choice === "3" || choice.toLowerCase() === "scissor") {
    return 3;
  }
}

function playGame(compChoice, playerChoice) {
  if (compChoice === playerChoice) {
    return "D";
  } else if (compChoice === 3) {
    if (playerChoice === 2) {
      return "C";
    }
  } else if (compChoice === 2) {
    if (playerChoice === 1) {
      return "C";
    }
  } else if (compChoice === 1) {
    if (playerChoice === 3) {
      return "C";
    }
  }
  return "P";
}

function game() {
  let computer = 0;
  let player = 0;
  for (let i = 0; i < 5; i++) {
    const game = playGame(compPlay(), playerPlay());
    if (game === "C") {
      computer++;
    } else if (game === "P") {
      player++;
    }
  }
  if (computer > player) {
    return `Computer won! with score ${computer}`;
  } else if (player > computer) {
    return `You won! with score ${player}`;
  }
}

function scoreManager(winner) {
  const playerScore = document.querySelector(".playerScore");
  const compScore = document.querySelector(".compScore");
  if (winner === "P") {
    console.log("You Won!");
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (winner === "C") {
    console.log("Computer Won!");
    compScore.textContent = parseInt(compScore.textContent) + 1;
  } else {
    console.log("Draw!");
  }
}

const imgButtons = document.querySelectorAll(".imgButton");

imgButtons.forEach((imgButton) => {
  imgButton.addEventListener("click", () => {
    imgButtons.forEach((imgButton) =>
      imgButton.classList.remove("selectedAction")
    );
    imgButton.classList.add("selectedAction");
    scoreManager(playGame(compPlay(), parseInt(imgButton.id)));
  });
});
