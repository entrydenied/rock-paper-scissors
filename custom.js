function getComputerChoice (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ['rock', 'paper', 'scissors'];

const computerSelection = getComputerChoice(array);
//console.log(computerSelection);

let playerSelection = prompt("Rock, paper, or scissors?");
playerSelection = playerSelection.toLowerCase();
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return("It's a tie!")       
    } else if (playerSelection == ("rock") && computerSelection == "scissors") {
        return("You Win! Rock beats Scissors!")
    } else if (playerSelection == ("rock") && computerSelection == "paper") {
        return("You Lose! Rock loses to Paper!")
    } else if (playerSelection == ("paper") && computerSelection == "rock") {
        return("You Win! Paper beats Rock!")
    } else if (playerSelection == ("paper") && computerSelection == "scissors") {
        return("You Lose! Paper loses to Scissors!")
    } else if (playerSelection == ("scissors") && computerSelection == "paper") {
        return("You Win! Scissors beats Paper!")
    } else if (playerSelection == ("scissors") && computerSelection == "rock") {
        return("You Lose! Scissors loses to Paper!")
    }
}

console.log(playRound(playerSelection, computerSelection));




function game(playRound) {
    for (let i = 0; i < 5; i++) {
        
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