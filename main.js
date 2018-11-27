function computerPlay() {
    let choices = [rock, paper, scissors];
    let pick = Math.floor(Math.random() * (2 - 0) ) + 0;
    return choices[pick];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    if (player == computerSelection) {
        return ("Draw! Try again.");
    } else if (player == 'rock' && computerSelection == 'paper') {
        return ("You lose! Paper beats rock.");
    } else if (player == 'rock' && computerSelection == 'scissors') {
        return ("You win! Rock beats scissors.")
    } else {
        return ("Error!")
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();