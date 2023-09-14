let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below: 

// random number 0-9 
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// console.log(generateTarget());


// compare human and computer guesses against target number
const compareGuesses = (user, computer, generateTarget) => {

    user = Math.abs(generateTarget - user);
    computer = Math.abs(generateTarget - computer);

    if (user === computer || user < computer) {
        return true;
    } else {
        return false;
    }
}

// console.log(compareGuesses(5, 6, 9));


// update score
const updateScore = (score) => {
    
    if (score === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}


// update rounds played
const advanceRound = () => {
    currentRoundNumber++;
}
