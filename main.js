const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll('.select i')];

function handSelection(){
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.color = 'white');
    this.style.color = 'red';
    
}


hands.forEach(hand => hand.addEventListener('click',handSelection));






