// console.log(Math.random());
// console.log((Math.random()*100 + 1));

let randomNumber = (parseInt((Math.random() * 100 + 1)));
console.log(randomNumber);


const submit = document.querySelector('#submit')
const lowOrHi = document.querySelector('.lowOrHi')
const guessSlot = document.querySelector('.guesses')
const userInput = document.querySelector('#guessField')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')



const p = document.createElement('p')

// let prevGuess = []
let numGuess = 1

let playGame = true


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // to check the userInput --> value 1-100 ? 
    if (isNaN(guess)) {
        userInput.value = ""
        alert("Please enter a valid Number")
    } else if (guess < 1) {
        userInput.value = ""
        alert("Please enter a Number Greator than equal to 1 ")
    } else if (guess > 100) {
        alert("Please enter a Number less than 100")
    } else {
        // prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMsg(`Game Over 🥺:  Random Number was  ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    // checking the guess
    if (guess < randomNumber) {
        displayMsg("Your Guess is TOOO low")
    } else if (guess > randomNumber) {
        displayMsg("Your Guess is TOOO high")
    } else {
        displayMsg("🎉 You guessed it right..🏆")
        endGame()
    }
}
function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMsg(message) {
   lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function (e) {
        randomNumber = (parseInt((Math.random() * 100 + 1)));
        // prevGuess = []
        guessSlot.innerHTML = ""
        numGuess = 1
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        lowOrHi.innerHTML=""
    })
}



