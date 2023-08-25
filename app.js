let playerScore = 0;
let compScore = 0;
let isGameOver = false;
const finalContainer = document.querySelector('#final');
const pScoreContainer = document.querySelector('#pScore');
const cScoreContainer = document.querySelector('#cScore');
const resultContainer = document.querySelector('#results');

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

function playRound() {

  if (isGameOver) return;

  const player = this.id;
  const comp = getComputerChoice();

  if (player === comp) {
    resultContainer.innerText = "TIE! Try again";
  } else if (player === "rock") {
    if (comp === "paper") {
      resultContainer.innerText = "You Lose! Paper beats Rock";
      compScore++;
    } else {
      resultContainer.innerText = "You Win! Rock beats Scissors";
      playerScore++;
    }
  } else if (player === "paper") {
    if (comp === "scissors") {
      resultContainer.innerText = "You Lose! Scissors beats Paper";
      compScore++;
    } else {
      resultContainer.innerText = "You Win! Paper beats Rock";
      playerScore++;
    }
  } else {
    if (comp === "rock") {
      resultContainer.innerText = "You Lose! Rock beats Scissors";
      compScore++;
    } else {
      resultContainer.innerText = "You Win! Scissors beats Paper";
      playerScore++;
    }
  }

  pScoreContainer.innerText = playerScore;
  cScoreContainer.innerText = compScore;
  if(playerScore === 5 || compScore === 5){
    if(playerScore > compScore){
      finalContainer.innerText = 'Player wins the game!';
    }
    else{
      finalContainer.innerText = 'Computer wins  the game!';
    }
    isGameOver = true;
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
    /*
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
    */
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

const buttons = document.querySelectorAll('button');
buttons.forEach(element => element.addEventListener('click', playRound)); 