function getComputerChoice() {
    let odds = Math.random();
        if (odds < .33) {
            return "Rock";
        }
        else if (odds >= .33 && odds <= .66) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
}

/*
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" || playerSelection == "rock") && (computerSelection == "Paper" || computerSelection == "paper")) {
        return "You Lose! Paper beats Rock";
    }
    if ((playerSelection == "Paper" || playerSelection == "paper") && (computerSelection == "Rock" || computerSelection == "rock")) {
        return "You Win! Paper beats Rock";
    }
    if ((playerSelection == "Rock" || playerSelection == "rock") && (computerSelection == "Scissors" || computerSelection == "scissors")) {
        return "You Win! Rock beats Scisscors";
    }
    if ((playerSelection == "Scissors" || playerSelection == "scissors") && (computerSelection == "Rock" || computerSelection == "rock")) {
        return "You Lose! Rock beats Scisscors";
    }
    if ((playerSelection == "Paper" || playerSelection == "paper") && (computerSelection == "Scissors" || computerSelection == "scissors")) {
        return "You Win! Rock beats Scisscors";
    }
    if ((playerSelection == "Scissors" || playerSelection == "scissors") && (computerSelection == "Paper" || computerSelection == "paper")) {
        return "You Lose! Rock beats Scisscors";
    }
    // tie
    if ((playerSelection == "Scissors" || playerSelection == "scissors") && (computerSelection == "Scissors" || computerSelection == "scissors")) {
        return "You Lose! Rock beats Scisscors";
    }
    if ((playerSelection == "Paper" || playerSelection == "paper") && (computerSelection == "Paper" || computerSelection == "paper")) {
        return "You Lose! Rock beats Scisscors";
    }
    if ((playerSelection == "Rock" || playerSelection == "rock") && (computerSelection == "rock" || computerSelection == "Rock")) {
        return "You Lose! Rock beats Scisscors";
    }
}
*/

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" || playerSelection == "rock") && (computerSelection == "Paper" || computerSelection == "paper")) {
        return "lost";
    }
    if ((playerSelection == "Paper" || playerSelection == "paper") && (computerSelection == "Rock" || computerSelection == "rock")) {
        return "win";
    }
    if ((playerSelection == "Rock" || playerSelection == "rock") && (computerSelection == "Scissors" || computerSelection == "scissors")) {
        return "win";
    }
    if ((playerSelection == "Scissors" || playerSelection == "scissors") && (computerSelection == "Rock" || computerSelection == "rock")) {
        return "lost";
    }
    if ((playerSelection == "Paper" || playerSelection == "paper") && (computerSelection == "Scissors" || computerSelection == "scissors")) {
        return "win";
    }
    if ((playerSelection == "Scissors" || playerSelection == "scissors") && (computerSelection == "Paper" || computerSelection == "paper")) {
        return "lost";
    }
    // tie
    if ((playerSelection == "Scissors" || playerSelection == "scissors") && (computerSelection == "Scissors" || computerSelection == "scissors")) {
        return "tie";
    }
    if ((playerSelection == "Paper" || playerSelection == "paper") && (computerSelection == "Paper" || computerSelection == "paper")) {
        return "tie";
    }
    if ((playerSelection == "Rock" || playerSelection == "rock") && (computerSelection == "rock" || computerSelection == "Rock")) {
        return "tie";
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors");
        let compChoice = getComputerChoice();
        let result = playRound(playerChoice, compChoice);
        if (result == "win") {
            playerScore++;
            console.log("You win this round");
        }
        else if (result == "tie") { 
            console.log("Tie this round");
        }
        else if (result == "lost") {
            compScore++;
            console.log("You lose this round");
        }
    }
    if (playerScore > compScore) {
        console.log("You win the game!");
    }
    else if (compScore == 3) {
        console.log("You win the game!");
    }
    else if (compScore > playerScore) {
        console.log("You lose the game!");
    }
    else if (compScore == playerScore) {
        console.log("Tie!");
    }
}


/*
const compChoice = getComputerChoice();
const playerChoice = "rock";
console.log(playRound(playerChoice, compChoice));
*/

game();
