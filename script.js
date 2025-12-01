let display = document.querySelector(".display");
let score = document.querySelector(".scoreDisplay");

const buttons = document.querySelector(".buttons");


function pickRandom(max){
    return Math.floor(Math.random() * max);
}


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    let randomIndex = pickRandom(3)

    return choices[randomIndex]
}

let humanChoice = null;
buttons.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        humanChoice = e.target.id;
        playRound(humanChoice);
    }
});



function playRound(hChoice){

    const humanChoice = hChoice;
    const computerChoice = getComputerChoice();

    displayResult(humanChoice,computerChoice);
}

function playGame(){

}

function displayResult(humanChoice, computerChoice){
    display.textContent = "";
    const human  = document.createElement("p");
    const computer = document.createElement("p");
    const result = document.createElement("p");

    human.textContent = `Your Choice: ${humanChoice}`;
    computer.textContent = `Computer's Choice: ${computerChoice}`;

    if(humanChoice == computerChoice){
        result.textContent = "It's a draw";
    }else if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            result.textContent = "You Lose! Paper beats Rock";
        }if(computerChoice == "scissors"){
            result.textContent = "You Win! Rock beats Scissors";
        }
    }else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
           result.textContent = "You Win! Paper beats Rock";
        }if(computerChoice == "scissors"){
            result.textContent = "You Lose! Scissors beats Paper";
        }
    }else if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            result.textContent = "You Lose! Rock beats Scissors";
        }if(computerChoice == "paper"){
            result.textContent = "You Win! Scissors beats Paper";
        }
    }

    display.appendChild(human);
    display.appendChild(computer);
    display.appendChild(result);
}

