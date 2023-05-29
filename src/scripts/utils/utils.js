import Card from "../components/Card";
import { cardList, imageViewPopup } from "../pages";
import { cardTemplateSelector } from "./constants";

export function addCardToPage(data) {
  const card = new Card(
    {
      data,
      handleCardClick: (imgData) => {
        imageViewPopup.open(imgData);
      },
    },
    cardTemplateSelector
  );

  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
}
