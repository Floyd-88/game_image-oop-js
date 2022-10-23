class GameManager {
    borderElement;
    scoreElement;
    deck = new Deck();
    firstCard = null;
    secondCard = null;
    countNumber = 0;

    constructor(border, score) {
        this.borderElement = border;
        this.scoreElement = score;
    }

    startGame() {
        this.countNumber = 0
        this.scoreElement.innerHTML = 0
        this.deck = new Deck();
        this.borderElement.innerHTML = "";
        this.shuflleDeck();
    }
    shuflleDeck() {
        this.deck.array_shuffle();
        this.deck.array_cards_random.forEach(card => this.borderElement.append(card.element))
    }

    selectCard(card) {
        if (card == this.firstCard) return
        card.flip()

        if (this.firstCard && this.secondCard) {
            this.firstCard.flip();
            this.secondCard.flip();
            this.firstCard = this.secondCard = null;
        }

        if (this.firstCard == null) {
            this.firstCard = card;
        } else if(this.secondCard == null) {
            this.counter()
            this.secondCard = card;

            if (this.firstCard.imagePath() === card.imagePath()) {
                this.deck.removeCard(this.firstCard);
                this.deck.removeCard(this.secondCard);
                this.firstCard = this.secondCard = null;
            }
        }
    }
    
    counter() {
        this.countNumber++;
        this.scoreElement.innerHTML = this.countNumber;
    }
}














