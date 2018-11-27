// let playerSelection = prompt('Rock, paper, or scissors?');
let computerSelection = computerPlay();

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let pick = Math.floor(Math.random() * (2 - 0) ) + 0;
    return choices[pick];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    if (player == computerSelection) {
        console.log("Draw! Try again.");
    } else if (player == 'rock' && computerSelection == 'paper') {
        console.log("You lose! Paper beats rock.");
    } else if (player == 'rock' && computerSelection == 'scissors') {
        console.log("You win! Rock beats scissors.");
    } else if (player == 'paper' && computerSelection == 'rock') {
        console.log("You win! Paper covers rock.");
    } else if (player == 'paper' && computerSelection == 'scissors') {
        console.log("You lose! Scissors cut paper.");
    } else if (player == 'scissors' && computerSelection == 'rock') {
        console.log("You lose! Rock breaks scissors.");
    } else if (player == 'scissors' && computerSelection == 'paper') {
        console.log("You win! Scissors cut paper");
    } else {
        console.log("Error!");
    }
}

function game() {
    const computerSelection = computerPlay();
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, paper, or scissors?');
        playRound(playerSelection, computerSelection);
    }
    
}

game();