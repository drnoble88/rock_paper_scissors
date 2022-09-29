function playRound(playerSelection, computerSelection) {
    if (playerWins(playerSelection, computerSelection)) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
    if (playerSelection === computerSelection) {
        return 'Tie Game!';
    }
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
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

// console.log(game());
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    console.log(playRound('rock', getComputerChoice()));
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    console.log(playRound('paper', getComputerChoice()));
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    console.log(playRound('scissors', getComputerChoice()));
});