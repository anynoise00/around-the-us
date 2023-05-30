import { checkResponse } from "../utils/utils";

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserData() {
    return fetch(this._baseUrl + `/users/me`, {
      headers: this._headers,
    }).then(checkResponse);
  }

  updateUserData({ name, about }) {
    return fetch(this._baseUrl + `/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(checkResponse);
  }

  getInitialCards() {
    return fetch(this._baseUrl + `/cards`, {
      headers: this._headers,
    }).then(checkResponse);
  }

  addCard({ name, link }) {
    return fetch(this._baseUrl + `/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(checkResponse);
  }

  deleteCard(cardId) {
    return fetch(this._baseUrl + `/cards/` + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(checkResponse);
  }
}
