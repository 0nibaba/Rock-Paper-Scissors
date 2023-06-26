let getComputerChoice = () => {
    let a = Math.random();
    a = a * (3) + 1;
    a = Math.floor(a);
    if(a === 1)
        return("Rock");
    else if (a === 2)
        return("Paper");
    else
        return("Scissors");
}

let winner = (playerChoice, computerChoice) => {
    if(playerChoice.toUpperCase() === computerChoice.toUpperCase())
        alert("Tie");
    else if (playerChoice.toUpperCase() === "ROCK") {
        if(computerChoice === "Paper") {
            alert("CPU wins");
        }
        else {
            alert("You win");
        }
    }
    else if (playerChoice.toUpperCase() === "PAPER") {
        if(computerChoice === "Scissors") {
            alert("CPU wins");
        }
        else {
            alert("You win");
        }
    }
    else if (playerChoice.toUpperCase() === "SCISSORS") {
        if(computerChoice === "Rock") {
            alert("CPU wins");
        }
        else {
            alert("You win");
        }
    }
    else {
        alert("wrong input");
    }
}


for(i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("Enter your choice");
    winner(playerChoice, computerChoice);
}