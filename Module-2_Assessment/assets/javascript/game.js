document.addEventListener('keyup', handleGuess);
var words = ['player', 'winner', 'loser', 'baseball', 'basketball'];

let selection = '';
let guesses_remaining = 10;
let wins = 0;
let guessed = [];
wordStatus = null;

function randomWord() {
    selection = words[Math.floor(Math.random() * words.length)];

    split_selection = selection.split('');
    
  }



function guessedWord() {
    wordStatus = selection.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('blank').innerHTML = wordStatus;
  }

function handleGuess(guess) {
    const key = guess.key;
    if (key) {
        console.log(key);
        guessed.indexOf(key) === -1 ? guessed.push(key) : null;
        document.getElementById('guessed_letters').innerText = guessed
    }
    if (selection.indexOf(key) >= 0){
        guessedWord();
        checkIfWin();
    } else if (selection.indexOf(key) === -1) {
        guesses_remaining--;
        updateGuesses();
        checkIfLose();
    }
}

function updateGuesses() {
    document.getElementById('remaining').innerHTML = guesses_remaining;
}

function checkIfWin() {
    if (wordStatus === selection) {
        wins++
        guessed = [];
        updateWins();
        newWord();
        
    }
}

function checkIfLose() {
    if (guesses_remaining === 0){
        guessed = [];
        newWord();

    }
}

function newWord() {
    guesses_remaining = 10;
    guessed = []
    randomWord();
    guessedWord();
    updateGuesses();
}

function winTracker() {
    document.getElementById('wins').innerHTML = wins
    updateWins();
}
function updateWins() {
    document.getElementById('wins').innerHTML = wins
}

randomWord();
guessedWord();
updateGuesses();
winTracker();


