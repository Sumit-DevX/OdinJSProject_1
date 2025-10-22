function pickRandom(max){
    return Math.floor(Math.random() * max);
}


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    let randomIndex = pickRandom(3)

    return choices[randomIndex]
}


function getHumanChoice(){
    let input = prompt("Enter your choice(Rock , Paper or Scissors): ");
    return input.toLowerCase();
}


function playRound(){

    const humanChoice = getHumanChoice();
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

    let humanScore = 0;
    let computerScore = 0;

    let i = 5;
    do {
        let round = playRound();
        if(round === true){
            ++humanScore;
        }else if(round === false) {
            ++computerScore;
        }
        i--;
        console.log("\n");
    }while(i != 0);


    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer's Score: ${computerScore}`);
    if(humanScore == computerScore){
        console.log("Its a draw! Good Game");
    }else if(humanScore > computerScore){
        console.log("You are the Winner!!!")
    }else {
        console.log("You lost! Computer is the Winner");
    }
}


playGame();