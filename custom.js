function getComputerChoice (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ['rock', 'paper', 'scissors'];

const computerSelection = getComputerChoice(array);
//console.log(computerSelection);

const playerSelection = "rock";
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!")       
    } else if (playerSelection == ("rock") && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors!")
    } else if (playerSelection == ("rock") && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock!")
    } else if (playerSelection == ("paper") && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock!")
    } else if (playerSelection == ("paper") && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper!")
    } else if (playerSelection == ("scissors") && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper!")
    } else if (playerSelection == ("scissors") && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors!")
    }
}

console.log(playRound(playerSelection, computerSelection));



// let choice = prompt("Please make your selection of rock, paper, or scissors!")

function game(choice, playRound) {

}
/** 
console.log(playRound(playerSelection, computerSelection));


for (let i = 0; i < 5; i++) {

}
*/