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

    this.cards.forEach((cardNum) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <div class="card__inner">
            <div class="card__back"></div>
            <div class="card__front">
                <img src="images/bird_Bird${images[cardNum] + 1}.png" />
            </div>
          </div>`;

      board.append(card);
      card.dataset.card = cardNum;
      //   board.insertAdjacentHTML("beforeend", html);
    });
  }

  _cardClick() {
    alert("yes");
  }
}

const game = new Game();

/*
            <div class="card">
              <div class="card__inner">
                <div class="card__back"></div>
                <div class="card__front">
                  <img src="images/bird_Bird1.png" />
                </div>
              </div>
            </div>
*/
