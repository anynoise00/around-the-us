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
import { alertError } from "../utils/utils.js";

export default class Card {
  constructor({ data, handleCardClick, userId }, templateSelector) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._templateSelector = templateSelector;

    this._userLiked = data.likes.some((elem) => elem._id == userId);
    this._likeCount = data.likes.length;

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

    this._likeBtnElement = this._element.querySelector(cardLikeBtnSelector);

    if (this._userLiked) {
      this._likeBtnElement.classList.add(cardBtnLikeActive);
    }

    this._renderLikes();

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
            aroundApi.deleteCard(this._id).catch(alertError);
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

  _deleteCard() {
    this._element.remove();
  }

  _toggleLikeButton() {
    this._userLiked = !this._userLiked;

    const likePromise = this._userLiked ? this._like() : this._dislike();
    likePromise
      .then((res) => {
        this._likeCount = res.likes.length;
        this._renderLikes();
      })
      .catch(alertError);
  }

  _like() {
    this._likeBtnElement.classList.add(cardBtnLikeActive);
    return aroundApi.likeCard(this._id);
  }

  _dislike() {
    this._likeBtnElement.classList.remove(cardBtnLikeActive);
    return aroundApi.dislikeCard(this._id);
  }

  _renderLikes() {
    this._element.querySelector(cardLikeCounterSelector).textContent =
      this._likeCount;
  }
}
