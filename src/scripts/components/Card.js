import {
  cardBtnLikeActive,
  cardDeleteBtnSelector,
  cardImageSelector,
  cardLikeBtnSelector,
  cardLikeCounterSelector,
  cardSelector,
  cardTitleSelector,
  cardViewBtnSelector,
} from "../utils/constants.js";

export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._likeCount = data.likes.length;
    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(cardTitleSelector).textContent = this._name;

    const cardImage = this._element.querySelector(cardImageSelector);
    cardImage.src = this._link;
    cardImage.alt = this._alt ?? `Uma imagem da paisagem do ${this._name}`;

    this._element.querySelector(cardLikeCounterSelector).textContent =
      this._likeCount;

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(cardLikeBtnSelector)
      .addEventListener("click", () => {
        this._toggleLikeButton();
      });

    this._element
      .querySelector(cardDeleteBtnSelector)
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._element
      .querySelector(cardViewBtnSelector)
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
      .querySelector(this._templateSelector)
      .content.querySelector(cardSelector)
      .cloneNode(true);

    return element;
  }

  _toggleLikeButton() {
    this._element
      .querySelector(cardLikeBtnSelector)
      .classList.toggle(cardBtnLikeActive);
  }

  _deleteCard() {
    this._element.remove();
  }
}
