function getComputerChoice() {
    let choice = ["ROCK","PAPPER", "SCISSORS"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

//console.log(getComputerChoice());

function playRound(playerSelction, computerSelection) {
    let playerSelctionWithCaps = playerSelction.toUpperCase();
    if (playerSelctionWithCaps === computerSelection)
    return "Draw!! " + playerSelctionWithCaps + " with " + computerSelection;
    else if (playerSelctionWithCaps === "ROCK") {
        if (computerSelection === "PAPPER") return `You lose! ${computerSelection} beats ${playerSelctionWithCaps}.`;
        else return `You win! ${playerSelctionWithCaps} beats ${computerSelection}.`;
    }  else if (playerSelctionWithCaps === "SCISSORS") {
        if (computerSelection === "ROCK") return `You lose! ${computerSelection} beats ${playerSelctionWithCaps}.`;
        else return `You win! ${playerSelctionWithCaps} beats ${computerSelection}.`;
    }  else {
        if (computerSelection === "SCISSORS") return `You lose! ${computerSelection} beats ${playerSelctionWithCaps}.`;
        else return `You win! ${playerSelctionWithCaps} beats ${computerSelection}.`;
    } 
}

let playerSelection;
//console.log(playRound(playerSelection,getComputerChoice()));
function playGame() {
    let playerScore = 0,
    computerScore = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        console.log(`Round  ${i+1}:`);
        playerSelection = prompt(`Round ${i+1}:\nWhat's your choice?`,"rock");
        result = playRound(playerSelection,getComputerChoice());
        
        if (result.slice(4,7) === "win") playerScore++;
        else if (result.slice(4,7) === "los") computerScore++; 
        console.log(result);
        console.log(`Score: \nPlayer ${playerScore} - ${computerScore} Computer.`);
    }
    if (playerScore > computerScore) console.log("You are the WINNWE!!!");
    else if (playerScore === computerScore) console.log("DRAW!!");
    else console.log("Computer is the WINNer!");
}
playGame();