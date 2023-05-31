import Card from "../components/Card";
import { cardSection, imageViewPopup, userInfo } from "../pages";
import { cardTemplateSelector } from "./constants";

export function addCardToPage(data, toStart = false) {
  const card = new Card(
    {
      data,
      handleCardClick: (imgData) => {
        imageViewPopup.open(imgData);
      },
      userId: userInfo.getUserId(),
    },
    cardTemplateSelector
  );

  const cardElement = card.generateCard();
  cardSection.addItem(cardElement, toStart);
}

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
}

export function alertError(err) {
  alert(`Algo deu errado. ${err}.`);
}
