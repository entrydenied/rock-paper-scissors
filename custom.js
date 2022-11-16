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
        return computerWin;

    }
}

//console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function gameScore() {
    let result = playRound()

    if (result === playerWinRound) {
        playerScore++;
    } else if (result === computerWin) {
        computerScore++;
    } else {
        draws++;
    }
}

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice(array);
        let roundResult = playRound(playerChoice, computerSelection);
        console.log(roundResult);

    }
}



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
*/