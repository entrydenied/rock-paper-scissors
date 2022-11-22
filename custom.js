// Global score definitions
let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

// Computer choice

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    const item = choices[randomIndex];
    return item;
}

// Round/Game win/loss messages
let playerWin = "You won the game!"
let computerWin = "You lost the game!"

// Plays one round of Rock, Paper, Scissors

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        const p = document.createElement('p')
        p.innerText = "It's a tie!"
        outcomeDiv.appendChild(p)

    } else if (playerSelection == ("rock") && computerSelection == "scissors") {
        const p = document.createElement('p')
        p.innerText = "You Win! Rock beats Scissors!"
        outcomeDiv.appendChild(p)
        playerScore++

    } else if (playerSelection == ("rock") && computerSelection == "paper") {
        const p = document.createElement('p')
        p.innerText = "You Lose! Rock loses to Paper!"
        outcomeDiv.appendChild(p)
        computerScore++

    } else if (playerSelection == ("paper") && computerSelection == "rock") {
        const p = document.createElement('p')
        p.innerText = "You Win! Paper beats Rock!"
        outcomeDiv.appendChild(p)
        playerScore++

    } else if (playerSelection == ("paper") && computerSelection == "scissors") {
        const p = document.createElement('p')
        p.innerText = "You Lose! Paper loses to Scissors!"
        outcomeDiv.appendChild(p)
        computerScore++

    } else if (playerSelection == ("scissors") && computerSelection == "paper") {
        const p = document.createElement('p')
        p.innerText = "You Win! Scissors beats Paper!"
        outcomeDiv.appendChild(p)
        playerScore++

    } else if (playerSelection == ("scissors") && computerSelection == "rock") {
        const p = document.createElement('p')
        p.innerText = "You Lose! Scissors loses to Paper!"
        outcomeDiv.appendChild(p)
        computerScore++
    }
}


const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            const h3 = document.createElement('h3')
            h3.classList.add('player-won')
            h3.innerText = "You've won the game. Congratulations!!!"
            outcomeDiv.appendChild(h3)
    
        } else {
            const h3 = document.createElement('h3')
            h3.classList.add('computer-won')
            h3.innerText = "You've lost the game. Nice try."
            outcomeDiv.appendChild(h3)
        }
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = "Player : " + playerScore
    computerScoreSpan.innerText = "Computer : " + computerScore
}


rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScore(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScore(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScore(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

/**  

const h4 = document.createElement('h4')
h4.innerText = "The score is " + playerScore + "-" + computerScore
outcomeDiv.appendChild(h4)

const btn = document.querySelector('#button');
btn.addEventListener('click', ()=> {
    console.log("Ayy we clickin");
})

window.addEventListener('click', playRound);


const btns = document.querySelectorAll('.btn');


 if (i => 5 && playerScore > computerScore) {
            console.log("You've won the game " + playerScore + "-" + computerScore + ". Congratulations!!!");
        } else if (5 >= i && playerScore > computerScore) {
            } else if (5 >= i && playerScore > computerScore) {
            console.log("You've lost the game " + playerScore + "-" + computerScore+ ". Nice try.");
        } else if (5 >= i && playerScore === computerScore) {
            } else if (5 >= i && playerScore === computerScore) {
            console.log("It's a tie!");
        }   

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        const p = document.createElement('p')
        p.innerText = 'draw'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        const p = document.createElement('p')
        p.innerText = 'playerWinRound'
        outcomeDiv.appendChild(p)
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        const p = document.createElement('p')
        p.innerText = 'playerWinRound'
        outcomeDiv.appendChild(p)
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        const p = document.createElement('p')
        p.innerText = 'playerWinRound'
        outcomeDiv.appendChild(p)
    } else { 
        const p = document.createElement('p')
        p.innerText = 'computerWinRound'
        outcomeDiv.appendChild(p)
    }
}

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


function getComputerChoice (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ['rock', 'paper', 'scissors'];

// Plays 5 rounds of Rock, Paper, Scissors

function game(playRound) { 
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        console.log("The score is " + playerScore + "-" + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("You've won the game. Congratulations!!!");
    } else if (playerScore < computerScore) {
        console.log("You've lost the game. Nice try.");
    } else {
        console.log("It's a tie!");
    }    
}

Runs the game
console.log(game(playRound));

*/



