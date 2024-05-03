let randonumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 0

let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}



function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }else if(guess<1){
    alert('please enter a number greater than 1')
  }else if(guess>100){
    alert('please enter a number less than 100')
  }else {
    
    prevGuess.push(guess)
    numGuess++;

    if(numGuess == 3){
      displayGuess(guess)
      displaymessage(`Game over! random number was ${randonumber}`)
      endGame();
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}



function checkGuess(guess){
  if(guess === randonumber){
    displaymessage(`You guessed it right`)
    endGame();
  }
  else if(guess < randonumber){
    displaymessage(`Your guess is too low`)
  } 
  else if(guess > randonumber){
    displaymessage(`Your guess is too high`);
  } 

}



function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}   `;
  remaining.innerHTML = `${3 - numGuess}`;

}



function displaymessage(message){
  
  lowOrHi.innerHTML = `${message}`;
}



function endGame(){

  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

}



function newGame(){

  const newGame = document.querySelector("#newGame")

  newGame.addEventListener('click',function(e){
    randonumber = parseInt(Math.random()*100+1);
    prevGuess = []
    numGuess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame = true;

  })

}

