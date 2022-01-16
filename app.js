function compPlay() {
  const rand = Math.floor(Math.random() * 3) + 1;
  console.log();
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

const imgButtons = document.querySelectorAll(".imgButton");

imgButtons.forEach((imgButton) => {
  imgButton.addEventListener("click", () => {
    if (imgButton.id === "1") {
      console.log("Rock");
    } else if (imgButton.id === "2") {
      console.log("Paper");
    } else {
      console.log("Scissor");
    }
  });
});
