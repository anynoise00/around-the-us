export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;

    this._handleCardClick = handleCardClick;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__title").textContent = this._name;

    const cardImage = this._element.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = this._alt ?? `Uma imagem da paisagem do ${this._name}`;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__button-like")
      .addEventListener("click", () => {
        this._toggleLikeButton();
      });

    this._element
      .querySelector(".card__button-delete")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._element
      .querySelector(".card__button-view-image")
      .addEventListener("click", () => {
        this._handleCardClick({
          name: this._name,
          link: this._link,
          alt: this._alt,
        });
      });
  }

  _getTemplate() {
    const element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return element;
  }

  _toggleLikeButton() {
    this._element
      .querySelector(".card__button-like")
      .classList.toggle("card__button-like_active");
  }

  _deleteCard() {
    this._element.remove();
  }
}
