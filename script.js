const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let playerScore = 0;
let aiScore = 0;


window.onload = function() {
    document.querySelector("#rock").onclick = chooseRock;
    document.querySelector("#paper").onclick = choosePaper;
    document.querySelector("#scissors").onclick = chooseScissors;
}

function computerPlay() {
    let result;
    let randomVal = Math.ceil(Math.random() * 3)
    
    switch (randomVal) {
        case 1:
            result = ROCK;
            break;
        case 2:
            result = PAPER;
            break;
        case 3:
            result = SCISSORS;
            break;
        default:
            result = "";
    }
    return result;
}

function chooseRock() {
    updateGame(ROCK);
}

function choosePaper() {
    updateGame(PAPER);
}

function chooseScissors() {
    updateGame(SCISSORS);
}

function updateGame(playerChoice) {
    let aiChoice = computerPlay();

    if (playerChoice === aiChoice) {
        draw();
    } else if (playerChoice === ROCK && aiChoice === SCISSORS) {
        playerWin();
    } else if (playerChoice === SCISSORS && aiChoice === PAPER) {
        playerWin();
    } else if (playerChoice === PAPER && aiChoice === ROCK) {
        playerWin();
    } else {
        aiWin();
    }
    updateMoves(playerChoice, aiChoice);
}

function playerWin() {
    playerScore++;
    updateScore();
}

function aiWin() {
    aiScore++;
    updateScore();
}

function updateScore() {
    let newScore = (playerScore + " - " + aiScore);
    document.querySelector("#score").textContent = newScore;
}

function updateMoves(playerMove, aiMove) {
    document.querySelector("#playerMove").textContent = playerMove.toUpperCase();
    document.querySelector("#aiMove").textContent = aiMove.toUpperCase();
}