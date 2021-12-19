// console.log("hello");


let playerScore = 0;
let computerScore = 0;
//DOM variables
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultMessage_p = document.querySelector(".result-message > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber =Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function conversionText(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    // const smallPlayer = "player".fontsize()
    resultMessage_p.innerHTML = conversionText(playerChoice) + " beats " + conversionText(computerChoice) + ". You win!";
    document.getElementById(playerChoice).classList.add('green-glow');
    document.getElementById(playerChoice).classList.remove('red-glow');
    document.getElementById(playerChoice).classList.remove('gray-glow');
    
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    resultMessage_p.innerHTML = conversionText(computerChoice) + " beats " + conversionText(playerChoice) + ". You lost...";
    document.getElementById(playerChoice).classList.add('red-glow');
    document.getElementById(playerChoice).classList.remove('green-glow');
    document.getElementById(playerChoice).classList.remove('gray-glow');
}

function draw(playerChoice, computerChoice) {
    resultMessage_p.innerHTML = conversionText(computerChoice) + " equals " + conversionText(playerChoice) + ". It's a draw.";
    document.getElementById(playerChoice).classList.add('gray-glow');
    document.getElementById(playerChoice).classList.remove('red-glow');
    document.getElementById(playerChoice).classList.remove('green-glow');
    // console.log("draw");
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;
    }
}

game("c");

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })

    scissors_div.addEventListener('click', function() {
        game("s")
    })
}

main();