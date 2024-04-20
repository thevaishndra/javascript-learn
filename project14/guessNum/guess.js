const randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#sbt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];//previous guessed numbers stored here
let numGuess = 1;//this starts with one and will go till 10

let playGame = true;//it allows to play game

function validateGuess(guess){//to validate if the input checks all the conditions and is valid

}

function checkGuess(){//print the message of validation

}