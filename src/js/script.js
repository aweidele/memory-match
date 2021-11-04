const images = Array.from(Array(12).keys());
const board = document.querySelector(".board__inner");
console.log(images);

class Game {
  constructor() {
    this.gameSize = 12;

    board.addEventListener("click", this._cardClick.bind(this));
    this._initGame();
  }

  _initGame() {
    const cardList = Array.from(Array(this.gameSize).keys());
    this.cards = [...cardList, ...cardList].sort((x, y) => Math.random() - 0.5);
    this.moves = [];

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
      //   board.insertAdjacentHTML("beforeend", html);
    });
  }

  _cardClick(e) {
    const card = e.target.closest(".card");
    const cardNum = card.dataset.card;
    if (this.moves.length === 2) return this._checkMatch();
    if (this.moves.find((v) => v === cardNum)) return;

    this.moves.push(cardNum);
    console.log(this.moves);
    card.classList.add("flipped");
  }

  _checkMatch() {
    const cardEl = document.querySelectorAll(".card");
    setTimeout(
      () => cardEl.forEach((c) => c.classList.remove("flipped")),
      1000
    );
  }
}

const game = new Game();
