class Pexeso {
  constructor(name, countCard, pathPexeso) {
    this.name = name;
    this.countCard = countCard;
    this.pathPexeso = pathPexeso;
    this.cards = [];
  }
  setCards() {
    for (let i = 0; i < this.countCard; i++) {
      if (i < this.countCard / 2) {
        this.cards.push({
          id: i,
          name: `${i}`,
          isUsed: false,
          onClick: false
        });
      }
      else if (i >= this.countCard / 2) {
        this.cards.push({
          id: i,
          name: `${i - this.countCard / 2}`,
          isUsed: false,
          onClick: false
        });
      }
    }
  }
  setRandomCards() {
    let randomImages = [];
    let imagesLength = this.cards.length;
    for (let i = 0; i < imagesLength; i++) {
      let randIndex = Math.floor(Math.random() * (imagesLength - i));
      randomImages.push(this.cards[randIndex]);
      randomImages[i].id = i;
      this.cards.splice(randIndex, 1);
    }
    this.cards = randomImages;
  }
}

export default Pexeso;