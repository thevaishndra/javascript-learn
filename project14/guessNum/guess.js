let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');//selecting submit button
const userInput = document.querySelector('#guessField');//selecting user input
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];//previous guessed numbers stored here
let numGuess = 1;//this starts with one and will go till 10

let playGame = true;//it allows to play game

if (playGame) {
    submit.addEventListener ('click', function (e) {//to submit
        e.preventDefault();//so that value doesn't goes to server
        const guess = parseInt(userInput.value);//selecting the values of user's input and converting into integer
        validateGuess(guess);//passing guess into another function
    });
}

function validateGuess(guess){//value is valid and b/w 1-100
    if(isNaN(guess)){
        alert('Kindly enter a valid number')
    }
    else if(guess < 1){
        alert('Kindly enter a number greater than 1')
    }
    else if(guess > 100){
        alert('Kindly enter a number less than 100')
    }
    else{
        prevGuess.push(guess);//push in array
        if(numGuess === 11){//10 guesses were completed
            displayGuess(guess);//all the guesses shown
            displayMessage(`GAME OVER! Random number was ${randomNumber}`);//game ends, show the original number
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){//print the message if guessed value is correct or not
    if(guess === randomNumber){
        displayMessage(`BANG ON! Your guess is correct`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is too low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){//empty user's input value, previous guess and guess remaining updation
    userInput.value = '';//clean-up method
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){//print message of low or high
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){//to end
    userInput.value = '';//to clean
    userInput.setAttribute('diabled', '');//so, that user can't set more values
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){//to start, resetting everything
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}