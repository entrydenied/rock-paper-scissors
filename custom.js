// Computer choice
function getComputerChoice (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ['rock', 'paper', 'scissors'];

// Round/Game win/loss messages
let playerWinRound = "You win the round!"
let computerWinRound = "You lost the round!"
let draw = "Draw!"
let playerWin = "You won the game!"
let computerWin = "You lost the game!"

// Plays one round of Rock, Paper, Scissors

let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice(array);

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

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log("Ayy we clickin");
})

window.addEventListener('click', playRound);



/** 
const btns = document.querySelectorAll('.btn');


// Plays 5 rounds of Rock, Paper, Scissors

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice(array);
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        gameScore(roundResult);
        console.log("The score is " + playerScore + "-" + computerScore);
    }
}


 if (i => 5 && playerScore > computerScore) {
            console.log("You've won the game " + playerScore + "-" + computerScore + ". Congratulations!!!");
        } else if (5 >= i && playerScore > computerScore) {
            } else if (5 >= i && playerScore > computerScore) {
            console.log("You've lost the game " + playerScore + "-" + computerScore+ ". Nice try.");
        } else if (5 >= i && playerScore === computerScore) {
            } else if (5 >= i && playerScore === computerScore) {
            console.log("It's a tie!");
        }
    }
}

 */

// Runs the game
console.log(game(playRound));

