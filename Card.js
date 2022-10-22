class Card {
image;
element;
shirt_card = true;

constructor(image) {
  this.image = image;

  this.element = document.createElement("img")
  this.element.classList.add("card")
  this.element.src = this.coverPath()
  this.element.connectedCard = this;
}

imagePath() {
  return`img/${this.image}`
}

coverPath() {
  return "img/black.jpg"
}

get element() {
  return this.element
}

flip() {
  if(this.shirt_card) {
    this.element.src = this.coverPath()
  } else {
    this.element.src = this.imagePath()
  }
  this.shirt_card = !this.shirt_card;
}
disconnectCardDOM() {
  this.element.connectedCard = null;
}

}
