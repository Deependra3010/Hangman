const word = document.querySelector('h5').innerText;
const guessLetter = document.getElementById('guessLetter');
const theWord = document.getElementById('theWord');
const result = document.getElementById('result');
const buttons = document.querySelectorAll("button");
const live = document.getElementById('live');
const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    window.location.reload();
})

var chances = 6;
var wrong = 0;
let guessed = [];
let currentWord = [];
for (let letter of word) {
    currentWord.push('_');
}
let answer = [];
for (let letter of word) {
    answer.push(letter);
}

for (letter of currentWord) {

    const viewLetters = document.createElement('span');
    viewLetters.innerText = letter + " ";
    theWord.appendChild(viewLetters);
}

function guess(choosenLetter) {
    if (guessed.indexOf(choosenLetter.id) === -1) {
        guessed.push(choosenLetter.id);
        guessLetter.innerHTML = guessed;
    }
    document.getElementById(choosenLetter.id).setAttribute('disabled', true);

    if (answer.indexOf(choosenLetter.id) >= 0) {
        var i = 0;
        for (let letter of answer) {
            if (letter === choosenLetter.id) {
                currentWord[i] = choosenLetter.id;
                theWord.innerHTML = "";
                for (letter of currentWord) {
                    const viewLetters = document.createElement('span');
                    viewLetters.innerText = letter + " ";
                    theWord.appendChild(viewLetters);
                }
            }
            i++;
        }
        isWon();
    }
    else if (answer.indexOf(choosenLetter.id) === -1) {
        wrong++
        updateWrong();
        isLost();
    }
}

function isWon() {
    if (JSON.stringify(currentWord) === JSON.stringify(answer)) {
        result.innerText = "You Won!!!";
        for (button of buttons) {
            button.disabled = true;
        }
    }
}

function updateWrong() {
    live.innerHTML = chances - wrong;
    if (wrong === 1) {
        document.getElementById('personImage').src = "1.png";
    }
    if (wrong === 2) {
        document.getElementById('personImage').src = "2.png";
    }
    if (wrong === 3) {
        document.getElementById('personImage').src = "3.png";
    }
    if (wrong === 4) {
        document.getElementById('personImage').src = "4.png";
    }
    if (wrong === 5) {
        document.getElementById('personImage').src = "5.png";
    }
    if (wrong === 6) {
        document.getElementById('personImage').src = "6.png";
    }
}

function isLost() {

    if (wrong === chances) {
        result.innerText = "You Lost!!!";
        for (button of buttons) {
            button.disabled = true;
        }
    }
}
