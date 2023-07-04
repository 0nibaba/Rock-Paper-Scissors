let userChoice;
let cpuChoiceNumber;
let userChoiceImage = document.getElementById('yourChoiceImage');
let cpuChoiceImage = document.getElementById('cpuChoiceImage');
let userScore = document.getElementById('yourScore');
let userScoreValue = userScore.textContent;
userScoreValue = parseInt(userScoreValue);
let cpuScore = document.getElementById('cpuScore');
let cpuScoreValue= cpuScore.textContent;
cpuScoreValue = parseInt(cpuScoreValue);
const limit = 5;

function cpuChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1)
        cpuChoiceImage.src = "/rock.png";
    else if (randomNumber === 2)
        cpuChoiceImage.src = "/paper.png";
    else
        cpuChoiceImage.src = "/scissor.png";
    return randomNumber;
}

function reset () {
    if(userScoreValue === limit || cpuScoreValue === limit) {
        if(userScoreValue === limit)
            alert('Congratulations! You win!');
        else
            alert('You lost! Better luck next time');
        userScoreValue = 0;
        userScore.textContent = userScoreValue;
        cpuScoreValue = 0;
        cpuScore.textContent = cpuScoreValue;
        userChoiceImage.src = '/questionmark.png';
        cpuChoiceImage.src = '/questionmark.png';
    }
}

const rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    userChoice = rock.id;
    userChoiceImage.src = `/${userChoice}.png`; 
    cpuChoiceNumber = cpuChoice();
    if(cpuChoiceNumber === 2) {
        cpuScoreValue++;
        cpuScore.textContent = cpuScoreValue;
    }
    else if (cpuChoiceNumber === 3) {
        userScoreValue++;
        userScore.textContent = userScoreValue;
    }
    setTimeout(() => {
        reset();
    }, 1000);
})

const paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    userChoice = paper.id;
    userChoiceImage.src = `/${userChoice}.png`;
    cpuChoiceNumber = cpuChoice();
    if(cpuChoiceNumber === 3) {
        cpuScoreValue++;
        cpuScore.textContent = cpuScoreValue;
    }
    else if (cpuChoiceNumber === 1) {
        userScoreValue++;
        userScore.textContent = userScoreValue;
    }
    setTimeout(() => {
        reset();
    }, 1000);
})

const scissor = document.getElementById('scissor');
scissor.addEventListener('click', function() {
    userChoice = scissor.id;
    userChoiceImage.src = `/${userChoice}.png`;
    cpuChoiceNumber = cpuChoice();
    if(cpuChoiceNumber === 1) {
        cpuScoreValue++;
        cpuScore.textContent = cpuScoreValue;
    }
    else if (cpuChoiceNumber === 2) {
        userScoreValue++;
        userScore.textContent = userScoreValue;
    }
    setTimeout(() => {
        reset();
    }, 1000);
})