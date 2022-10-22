class Deck {
    array_cards = ["111.jpg", "222.jpg", "333.jpg", "444.jpg", "555.jpg"];

    constructor() {
        this.array_cards_random = [];
        this.array_cards.forEach(i => {
            this.array_cards_random.push(new Card(i))
            this.array_cards_random.push(new Card(i))
        })
    }

    array_shuffle() {
        return this.array_cards_random.sort(function() {
            return 0.5 - Math.random();
        });
    }

    removeCard(card) {
        let index = this.array_cards_random.findIndex(i => i.imagePath() == card.imagePath())
        if(index != -1) {
            this.array_cards_random.splice(index, 1);
            card.disconnectCardDOM()
        }
    }

}