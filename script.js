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


    console.log("Your Choice: " + humanChoice);
    console.log("Computer's Choice: " + computerChoice);

    if(humanChoice == computerChoice){
        console.log("It's a draw");
        return null;
    }else if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            console.log("You Lose! Paper beats Rock");
            return false;
        }if(computerChoice == "scissors"){
            console.log("You Win! Rock beats Scissors");
            return true;
        }
    }else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            console.log("You Win! Paper beats Rock");
            return true;
        }if(computerChoice == "scissors"){
            console.log("You Lose! Scissors beats Paper");
            return false;
        }
    }else if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            console.log("You Lose! Rock beats Scissors");
            return false;
        }if(computerChoice == "paper"){
            console.log("You Win! Scissors beats Paper");
            return true;
        }
    }
}

function playGame(){

}

playRound();