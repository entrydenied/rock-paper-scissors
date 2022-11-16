const options = ['rock', 'paper', 'scissors'];

const random = Math.floor(Math.random() * options.length);

//console.log(random, options[random]);

function getComputerChoice () {
    return (random, options[random]);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

 
function playRound(playerSelection, computerSelection) {
    
}
/** 
let choice = prompt("Please make your selection of rock, paper, or scissors!")

function game(choice, playRound) {

}

console.log(playRound(playerSelection, computerSelection));


for (let i = 0; i < 5; i++) {

}
*/