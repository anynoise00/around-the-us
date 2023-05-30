import {
  aroundApi,
  deleteConfirmPopup as confirmDeletionPopup,
} from "../pages/index.js";
import {
  cardBtnDeleteHidden,
  cardBtnLikeActive,
  cardDeleteBtnSelector,
  cardIdSelector,
  cardImageSelector,
  cardLikeBtnSelector,
  cardLikeCounterSelector,
  cardSelector,
  cardTitleSelector,
  cardViewBtnSelector,
} from "../utils/constants.js";
import { logError } from "../utils/utils.js";

export default class Card {
  constructor({ data, handleCardClick, userId }, templateSelector) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._likeCount = data.likes.length;
    this._templateSelector = templateSelector;
    this._isOwner = data.owner._id == userId;

    this._handleCardClick = handleCardClick;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    if (!this._isOwner) {
      this._element
        .querySelector(cardDeleteBtnSelector)
        .classList.add(cardBtnDeleteHidden);
    }

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

    if (this._isOwner) {
      this._element
        .querySelector(cardDeleteBtnSelector)
        .addEventListener("click", () => {
          confirmDeletionPopup.setConfirmAction(() => {
            aroundApi.deleteCard(this._id).catch(logError);
            this._deleteCard();
            confirmDeletionPopup.close();
          });

          confirmDeletionPopup.open();
        });
    }

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
