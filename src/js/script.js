const images = Array.from(Array(12).keys());
const board = document.querySelector(".board__inner");

class Game {
  constructor() {
    this.gameSize = 4;

    board.addEventListener("click", this._cardClick.bind(this));
    this._initGame();
  }

  _initGame() {
    this.cardList = Array.from(Array(this.gameSize).keys());
    this.cards = [...this.cardList, ...this.cardList].sort(
      (x, y) => Math.random() - 0.5
    );
    this.moves = [];
    this.matches = 0;

    this.cards.forEach((cardNum, i) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.card = i;

      card.innerHTML = `
          <div class="card__inner">
            <div class="card__back"></div>
            <div class="card__front">
                <img src="images/bird_Bird${images[cardNum] + 1}.png" />
            </div>
          </div>`;

      board.append(card);
    });
    console.log(this.cards);
  }

  _cardClick(e) {
    const card = e.target.closest(".card");
    const cardNum = card.dataset.card;

    if (
      this.moves.find((v) => v === cardNum) ||
      this.moves.length >= 2 ||
      card.classList.contains("matched")
    )
      return;

    this.moves.push(cardNum);
    card.classList.add("flipped");
    if (this.moves.length >= 2) return this._checkMatch();
  }

  _checkMatch() {
    const [move1, move2] = this.moves;
    const cardEl = document.querySelectorAll(".card");

    if (this.cards[move1] === this.cards[move2]) {
      console.log("MATCH!!");
      this.matches++;
      cardEl[move1].classList.add("matched");
      cardEl[move2].classList.add("matched");
    }

    setTimeout(() => {
      cardEl.forEach((c) => c.classList.remove("flipped"));
      this.moves = [];
    }, 2000);
  }
}

const game = new Game();
