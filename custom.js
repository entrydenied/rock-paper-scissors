const options = ['rock', 'paper', 'scissors'];

const random = Math.floor(Math.random() * options.length);

//console.log(random, options[random]);

function getComputerChoice () {
    return (random, options[random]);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == getComputerChoice) {
        console.log("It's a tie!")       
    } else if (playerSelection == ("rock") && getComputerChoice == scissors) {
        console.log("You Win! Rock beats Scissors!")
    } else if (playerSelection == ("rock") && getComputerChoice == paper) {
        console.log("You Lose! Paper beats Rock!")
    } else if (playerSelection == ("paper") && getComputerChoice == rock) {
        console.log("You Win! Paper beats Rock!")
    } else if (playerSelection == ("paper") && getComputerChoice == scissors) {
        console.log("You Lose! Scissors beats Paper!")
    } else if (playerSelection == ("scissors") && getComputerChoice == paper) {
        console.log("You Win! Scissors beats Paper!")
    } else if (playerSelection == ("scissors") && getComputerChoice == rock) {
        console.log("You Lose! Rock beats Scissors!")
    }
}

/** 
let choice = prompt("Please make your selection of rock, paper, or scissors!")

function game(choice, playRound) {

}

console.log(playRound(playerSelection, computerSelection));


for (let i = 0; i < 5; i++) {

}
*/