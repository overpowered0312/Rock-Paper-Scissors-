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
        return "lost";
    }
    if ((playerSelection == "Scissors" || playerSelection == "scissors") && (computerSelection == "Paper" || computerSelection == "paper")) {
        return "win";
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

let playerScore = 0;
let compScore = 0;

function game(playerChoice, compChoice) {
        let result = playRound(playerChoice, compChoice);
        if (result == "win") {
            playerScore++;
            document.getElementById("results").innerHTML = "You win this round";
        }
        else if (result == "tie") { 
            document.getElementById("results").innerHTML = "Tie this round";
        }
        else if (result == "lost") {
            compScore++;
            document.getElementById("results").innerHTML = "You lose this round";
        }

    document.getElementById("playerScore").innerHTML = "Player: " + playerScore;
    document.getElementById("compScore").innerHTML = "Computer: " + compScore;
    if (playerScore == 5) {
        document.getElementById("results").innerHTML = "You win the game!";

        const btnscissors = document.querySelector('#scissors');
        btnscissors.removeEventListener('click', playScissors);

        const btnrock = document.querySelector('#rock');
        btnrock.removeEventListener('click', playRock);
        
        const btnpaper = document.querySelector('#paper');
        btnpaper.removeEventListener('click', playPaper);
    }
    else if (compScore == 5) {
        document.getElementById("results").innerHTML = "You lose the game!";

        const btnscissors = document.querySelector('#scissors');
        btnscissors.removeEventListener('click', playScissors);

        const btnrock = document.querySelector('#rock');
        btnrock.removeEventListener('click', playRock);
        
        const btnpaper = document.querySelector('#paper');
        btnpaper.removeEventListener('click', playPaper);
   }
}

function restartGame() {
    document.getElementById("results").innerHTML = "Result";

    const btnscissors = document.querySelector('#scissors');
    btnscissors.addEventListener('click', playScissors);

    const btnrock = document.querySelector('#rock');
    btnrock.addEventListener('click', playRock);

    const btnpaper = document.querySelector('#paper');
    btnpaper.addEventListener('click', playPaper);

    playerScore = 0;
    compScore = 0;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScore;
    document.getElementById("compScore").innerHTML = "Computer: " + compScore;
}

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

function playRock() {
    game("Rock", getComputerChoice());
}
function playScissors() {
    game("Scissors", getComputerChoice());
}
function playPaper() {
    game("Paper", getComputerChoice());
}

const btnrock = document.querySelector('#rock');
btnrock.addEventListener('click', playRock);

const btnpaper = document.querySelector('#paper');
btnpaper.addEventListener('click', playPaper);

const btnscissors = document.querySelector('#scissors');
btnscissors.addEventListener('click', playScissors);

const btnrestart = document.querySelector('#restart');
btnrestart.addEventListener('click', () => {
    restartGame();
    
});

game();



