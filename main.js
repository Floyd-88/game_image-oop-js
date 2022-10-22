let div = document.querySelector("#images")
let start_game = document.querySelector("#start_game")
let count_try = document.querySelector("#count_try")

let cardsGame = new Deck()
cardsGame.array_shuffle();
cardsGame.show_card(div);

document.addEventListener("click", function (e){
    if(e.target.className === 'buttonClass') {

    }
})