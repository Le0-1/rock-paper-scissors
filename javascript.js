function game() {
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection, computerSelection;
    let result;
    let roundCounter = 1;
    
    while (!(isGameOver(playerScore, computerScore))) {

        playerSelection = getPlayerChoice();
        if (validateOption(playerSelection) === false) return; 
        
        computerSelection = getComputerChoice();

        result = playRound(playerSelection, computerSelection);
    
        roundInfo(result, playerSelection, computerSelection, roundCounter);

        if (result === "Player") {
            playerScore+= 1;
        }
    
        else if (result === "Tie") {
            console.log("Score não mudou");
        }
    
        else {
            computerScore+= 1;
        }

        printScore(playerScore, computerScore);

        roundCounter+= 1;
    }
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) return "rock";
    else if (number === 2) return "paper";
    else return "scissor";
}

function declareRoundWinner(playerSelection, computerSelection) {
    let playerWin = "Player";
    let computerWin = "Computer";
    let tie = "Tie";

    if (playerSelection === "rock" && computerSelection === "scissor") {
        return playerWin;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return playerWin;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        return playerWin;
    }
    else if (playerSelection === computerSelection) {
        return tie;
    }
    else return computerWin;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    return declareRoundWinner(playerSelection, computerSelection);

}

function validateOption(playerSelection) {

    if ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissor")) {
        alert("You didn't choose anything!");
        return false;
    }

    else return true;
}

function roundInfo(result, playerSelection, computerSelection, roundCounter) {
    console.log(`---------- ROUND ${roundCounter} ----------`)
    if (result === "Tie") {
        console.log("Empate");
        console.log(`Player selection: ${playerSelection}`);
        console.log(`Computer selection: ${computerSelection}`);
    }

    else if (result === "Player") {
        console.log(`Player selection: ${playerSelection}`);
        console.log(`Computer selection: ${computerSelection}`);
    }

    else {
        console.log(`Player selection: ${playerSelection}`);
        console.log(`Computer selection: ${computerSelection}`);
    }
}

function getPlayerChoice() {
    let playerSelection = prompt("Write rock, paper or scissor");
    return playerSelection;
}

function printScore(playerScore, computerScore) {
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}

function isGameOver(playerScore, computerScore) {
    if (playerScore === 3) {
        console.log("Player won the match!");
        return true;
    }

    else if (computerScore === 3) {
        console.log("Computer won the match!");
        return true;
    }

    else 
        return false;
}