function getComputerChoice() {
    let choice = ["ROCK","PAPPER", "SCISSORS"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

const inputRound = document.querySelector("input");
const startButton = document.querySelector("#start");
const choiceContainer = document.querySelector("div.choiceContainer");
let round;


const rockButton = document.querySelector("#rock");
const papperButton = document.querySelector("#papper");
const scissorsButton = document.querySelector("#scissors");
const playRoundContainer = document.querySelector("div.playRound");
const playRoundButton = document.querySelector("button#playRound");



const playRoundDiv = document.querySelector("div.playRound");
const currentRound = document.querySelector("div#currentRound");
const currentRoundHolder = document.createElement("h3");
currentRound.appendChild(currentRoundHolder);
const startGame = document.querySelector("div#startGame");

let currentRoundInt = 0 ;
startButton.addEventListener("click", () => {
    round = inputRound.value;
    
    startGame.setAttribute("style", "display: none;");
    currentRoundInt++;
    choiceContainer.setAttribute("style", "display: block;");
    currentRoundHolder.textContent = `Round ${currentRoundInt}/${round} :`;
    currentRound.setAttribute("style", "display: block;");
    playRoundDiv.setAttribute("style", "display: block;");
})

let userChoice ;
const currentChoice = document.querySelector(".currentChoice");
const h3CurrentChoice = currentChoice.lastElementChild;
function userChoose (e) {
    
    userChoice = e.target.textContent;
    h3CurrentChoice.textContent = "You're choosing " + userChoice;
}


rockButton.addEventListener("click", userChoose);
papperButton.addEventListener("click", userChoose);
scissorsButton.addEventListener("click", userChoose);

function playRound(playerSelction, computerSelection) {
    let playerSelctionWithCaps = playerSelction.toUpperCase();
    if (playerSelctionWithCaps === computerSelection)
    return 0;
    else if (playerSelctionWithCaps === "ROCK") {
        if (computerSelection === "PAPPER") return "Computer";
        else return "User";
    }  else if (playerSelctionWithCaps === "SCISSORS") {
        if (computerSelection === "ROCK") return "computer";
        else return "User";
    }  else {
        if (computerSelection === "SCISSORS") return "Computer";
        else return "User";
    } 
}
let playerScore = 0, computerScore = 0;

const scoreH2 = document.querySelector("h2.score");
const roundHistory = document.querySelector("ul");

const finalScore = document.querySelector("#finalScore");
const playAgain = document.querySelector("div.playAgain");
const playAgainButton = document.createElement("button");
playAgainButton.textContent = "Play Again"
playAgain.appendChild(playAgainButton);
playRoundButton.addEventListener("click", () => {
    if (userChoice === ''){

    } else {
        
        if (currentRoundInt <= round) {
            let computerChoice = getComputerChoice();
            let result = playRound(userChoice, computerChoice);
            scoreH2.setAttribute("style","display:block;");
            const roundResult = document.createElement("li");
            console.log(result);
            if (result === "User") {
                playerScore ++;
                scoreH2.textContent = `Player ${playerScore} - ${computerScore} Computer.`
                roundResult.textContent = `You win! Your choice: ${userChoice} vs ${computerChoice} : Computer's choice.`;
                roundHistory.appendChild(roundResult);
            } else if (result === "Computer") {
                computerScore ++;
                scoreH2.textContent = `Player ${playerScore} - ${computerScore} Computer.`
                roundResult.textContent = `You lose! Your choice: ${userChoice} vs ${computerChoice} : Computer's choice.`;
                roundHistory.appendChild(roundResult);
            } else { 
                scoreH2.textContent = `Player ${playerScore} - ${computerScore} Computer.`
                roundResult.textContent = "Draw";
                roundHistory.appendChild(roundResult);
            }
            h3CurrentChoice.textContent = '';
            currentRoundInt++;
            
            if (currentRoundInt > round) {
                let finalResult = playerScore>computerScore ? "YOU WON!!" : "COMPUTER WON!!";
                if (playerScore === computerScore) finalResult = "DRAW!!";
                finalScore.textContent = finalResult;

                finalScore.setAttribute("style","display:block;");
                currentRound.setAttribute("style", "display: none;");
                choiceContainer.setAttribute("style", "display: none;");
                playRoundContainer.setAttribute("style", "display: none;");
                playAgain.setAttribute("style","display:block;");

            } else currentRoundHolder.textContent = `Round ${currentRoundInt}/${round} :`;
        }
        
        
    }
})

playAgainButton.addEventListener("click", ()=>{
    startGame.setAttribute("style","display:block;");
    finalScore.setAttribute("style","display:none;");
    scoreH2.setAttribute("style","display:none;");
    playAgain.setAttribute("style","display:none;");
    playerScore = 0;
    computerScore = 0;
    currentRoundInt = 0;
})

 /*
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
playGame();*/



