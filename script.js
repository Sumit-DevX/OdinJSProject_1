let display = document.querySelector(".display");
let score = document.querySelector(".scoreDisplay");

const buttons = document.querySelector(".buttons");

let hScore = document.querySelector(".hScore");
let cScore = document.querySelector(".cScore");
let humanScore = 0;
let computerScore  = 0;

function pickRandom(max){
    return Math.floor(Math.random() * max);
}


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    let randomIndex = pickRandom(3);

    return choices[randomIndex];
}

let humanChoice = null;
buttons.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        humanChoice = e.target.id;
        playRound(humanChoice);
        finalResult();
    }
});



function playRound(hChoice){

    const humanChoice = hChoice;
    const computerChoice = getComputerChoice();
    
    displayResult(humanChoice,computerChoice);

    updateScore(humanChoice,computerChoice);
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

    console.log(humanScore);
    console.log(computerScore);
}

function updateScore(hChoice,cChoice){

    if(hChoice == cChoice){
        return 0;
    }else if(hChoice == "rock"){
        if(cChoice == "paper"){
            computerScore++;
            cScore.textContent = computerScore;
        }if(cChoice == "scissors"){
            humanScore++;
            hScore.textContent = humanScore;
        }
    }else if(hChoice == "paper"){
        if(cChoice == "rock"){
           ++humanScore;
           hScore.textContent = humanScore;
        }if(cChoice == "scissors"){
           computerScore++;
           cScore.textContent = computerScore;
        }
    }else if(humanChoice == "scissors"){
        if(cChoice == "rock"){
            computerScore++;
            cScore.textContent = computerScore;
        }if(cChoice == "paper"){
            humanScore++;
            hScore.textContent = humanScore;
        }
    }
}

function finalResult(){
    if(humanScore == 5 || computerScore == 5){
        if(humanScore == 5){
            alert("You Won Cogratulation!!");
            window.location.reload();
        }else{
            alert("You lost T_T, better luck next time");
            window.location.reload();
        }
    }
}