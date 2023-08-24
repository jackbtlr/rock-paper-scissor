function getComputerChoice() {
  const randNum = Math.random();
  if (randNum < 0.334) {
    return "rock";
  } else if (randNum < 0.667) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(player, comp) {
  if (player === comp) {
    return "TIE! Try again";
  } else if (player === "rock") {
    if (comp === "paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors";
    }
  } else if (player === "paper") {
    if (comp === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "You Win! Paper beats Rock";
    }
  } else {
    if (comp === "rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "You Win! Scissors beats Paper";
    }
  }
}

function getInput() {
  let playerSelection = prompt("Enter your choice!");

  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    playerSelection = prompt(
      "Please enter a valid choice: rock, paper or scissors"
    ).toLowerCase();
  }

  return playerSelection
}

function game() {
    let pScore = 0;
    let cScore = 0;
    for(let i = 0;  i < 5; i++){
        const player = getInput();
        const comp = getComputerChoice();
        const result = playRound(player, comp)
        if(result[4] === 'W'){
            pScore++;
        }
        else if(result[4] === 'L'){
            cScore++;
        }
        console.log(result);
        console.log('~Current Score~');
        console.log(`Computer: ${cScore}, Player: ${pScore}`);
    }
    if(cScore < pScore){
        console.log('Winner: Computer');
    }
    else if(pScore > cScore){
        console.log('Winner: Player');
    }
    else{
        console.log('The game ends in a TIE!');
    }
}

game();
