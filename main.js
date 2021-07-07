let firstCard = 7;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");


function startGame () {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " +firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) {
        message = "you've got BlackJack!"
        hasBlackJack = true;
    } else {
        message = "you're out of the game!"
        isAlive = false;
    }
    
   messageEl.textContent = message;
}

function newCard() {
    let anotherCard = 3;
    sum += anotherCard;
    renderGame();
}
