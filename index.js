//Nos devuelve un num. aleatorio hasta el 100. + 1 es para redondear hacia arriba ya que Math.floor redondea hacia abajo.
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Se usarán para insertar valores en los párrafos más adelante:
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

//Hacen referencia a la entrada de texto y al botón de enviar:
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');//Input

//Conteo de intentos desde 1 y referencia al botón de reinicio:
let guessCount = 1;
let resetButton;


function checkGuess() {
  let userGuess = Number(guessField.value);
  if(guessCount === 1){
    guesses.textContent = 'Previous attempts: ';//intentos previos
  }
  guesses.textContent += userGuess + ' ';

  if(userGuess === randomNumber){
    lastResult.textContent = 'Congrats! You guessed it!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  }else if(guessCount === 10){
    lastResult.textContent = 'End of the game!';
    setGameOver();
  }else{
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber){
      lowOrHi.textContent = 'The number is very low!';
    }else if(userGuess > randomNumber){
      lowOrHi.textContent = 'The number is very high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

//Reestablece todo a como estaba al inicio del game:
function resetGame(){
  guessCount = 1;

  const resetP = document.querySelectorAll('.resultP');
  for(let i = 0; i < resetP; i++){
    resetP[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessCount.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
};