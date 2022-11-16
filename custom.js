// Computer choice
function getComputerChoice (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ['rock', 'paper', 'scissors'];


//console.log(computerSelection);




// Round/Game win/loss messages
let playerWinRound = "You win the round!"
let computerWinRound = "You lost the round!"
let draw = "Draw!"
let playerWin = "You won the game!"
let computerWin = "You lost the game!"

// Plays one round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return draw;    

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return playerWinRound;

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return playerWinRound;

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return playerWinRound;

    } else { 
        return computerWinRound;

    }
}

//console.log(playRound(playerSelection, computerSelection));


// Global score definitions
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// Keeps track of the Rock, Paper, Scissors game score
function gameScore(result) {

    if (result === playerWinRound) {
        playerScore++;
    } else if (result === computerWinRound) {
        computerScore++;
    } else {
        draws++;
    }
}

// Plays 5 rounds of Rock, Paper, Scissors
function game(playRound) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice(array);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        gameScore(roundResult);
        console.log("The score is " + playerScore + "-" + computerScore);

        if (i => 5 && playerScore > computerScore) {
            console.log("You've won the game " + playerScore + "-" + computerScore + ". Congratulations!!!");
        } else if (5 >= i && playerScore > computerScore) {
            console.log("You've lost the game " + playerScore + "-" + computerScore+ ". Nice try.");
        } else if (5 >= i && playerScore === computerScore) {
            console.log("It's a tie!");
        }
    }
}

console.log(game(playRound));


/** 
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let gameScore = ;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!")       
    } else if (playerSelection == ("rock") && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors!")
    } else if (playerSelection == ("rock") && computerSelection == "paper") {
        console.log("You Lose! Rock loses to Paper!")
    } else if (playerSelection == ("paper") && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock!")
    } else if (playerSelection == ("paper") && computerSelection == "scissors") {
        console.log("You Lose! Paper loses to Scissors!")
    } else if (playerSelection == ("scissors") && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper!")
    } else if (playerSelection == ("scissors") && computerSelection == "rock") {
        console.log("You Lose! Scissors loses to Paper!")
    }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    displayResults("Tie game!");
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore = ++computerScore;
    keepCpuScore();
    if (computerScore === 1) {
      displayResults(
        `Oh no! You lost.
        ${capitalize(computerSelection)} beats ${playerSelection}.`
      );
    } else if (computerScore === 2) {
      displayResults(
        `Arghh. ${capitalize(
          computerSelection
        )} beats ${playerSelection}. Give it another shot!`
      );
    } else if (computerScore === 3) {
      displayResults(
        `${capitalize(
          computerSelection
        )} beats ${playerSelection}. It's ok. You got this!!`
      );
    } else if (computerScore === 4) {
      displayResults(
        `Oh no. It's match point!! ${capitalize(
          computerSelection
        )} beats ${playerSelection}. Don't let us down!`
      );
    } else {
      displayResults(`${computerSelection} beats ${playerSelection}`);
    }
  } else {
    playerScore = ++playerScore;
    keepPlayerScore();
    if (playerScore === 1) {
      displayResults(
        `Lets go!!! You won.
        ${capitalize(playerSelection)} beats ${computerSelection}.`
      );
    } else if (playerScore === 2) {
      displayResults(
        `You're pretty good at this. ${capitalize(
          playerSelection
        )} beats ${computerSelection}.`
      );
    } else if (playerScore === 3) {
      displayResults(
        `${capitalize(
          playerSelection
        )} beats ${computerSelection}! Has mankind found its savior??`
      );
    } else if (playerScore === 4) {
      displayResults(
        `${capitalize(
          playerSelection
        )} beats ${computerSelection}. One more and you're a hero!`
      );
    } else {
      displayResults(`${playerSelection} beats ${computerSelection}`);
    }
  }
}

*/