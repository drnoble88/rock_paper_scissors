function playRound(playerSelection, computerSelection) {
    let lowerCasePS = toLowerCase(playerSelection);
    if (playerWins(lowerCasePS, computerSelection)) {
        playerScore++;
        return `You Win! ${lowerCasePS} beats ${computerSelection}!`;
    }
    if (lowerCasePS === computerSelection) {
        return 'Tie Game!';
    }
    computerScore++;
    return `You Lose! ${computerSelection} beats ${lowerCasePS}!`;
}

function toLowerCase(playerSelection) {
    return playerSelection.toLowerCase();
}

function playerWins(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return true;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return true;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return true;
    }
    return false;
}

function getComputerChoice() {
    let num1Through3 = Math.floor(Math.random() * 3) + 1;
    if (num1Through3 === 1) {
        return 'rock';
    } else if (num1Through3 === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function game() {
    while (computerScore < 5 && playerScore < 5) {
        const playerSelection = prompt('Pick rock, paper, or scissors! First to five:');
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log(`Player points: ${playerScore}, Computer points: ${computerScore}`)
    }
    if (playerScore === 5) {
        return `You won ${playerScore} to ${computerScore}!`
    }
    return `You lost ${computerScore} to ${playerScore}!`
}

let computerScore = 0;
let playerScore = 0;

console.log(game());