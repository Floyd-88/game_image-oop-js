let div = document.querySelector("#images")
let count_try = document.querySelector("#count_try")
let start_game = document.querySelector("#start_game")


let game = new GameManager(div, count_try)
game.startGame()

div.addEventListener("click", function (e){
    let clickCard = e.target.connectedCard
    if(clickCard) {
        game.selectCard(clickCard)
    }
})
start_game.addEventListener("click", function () {
    game.startGame()
})