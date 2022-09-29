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
    if (computerScore < 5 && playerScore < 5) {

        p.textContent = `${playRound('rock', getComputerChoice())}`;

        score.textContent = `Your Score ${playerScore} Computer Score: ${computerScore}`
    }
    if (playerScore === 5) {
        score.textContent = `Your Score ${playerScore} Computer Score: ${computerScore}. You won!`
    }
    if (computerScore === 5) {
        score.textContent = `Your Score ${playerScore} Computer Score: ${computerScore}. You lost!`
    }
}

let computerScore = 0;
let playerScore = 0;


// console.log(game());
const container = document.querySelector('#container');
const p = document.querySelector('p');
const score = document.querySelector('#score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    game();

});

paper.addEventListener('click', () => {
    game();
});

scissors.addEventListener('click', () => {
    game();
});