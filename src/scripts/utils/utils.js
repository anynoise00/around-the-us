import Card from "../components/Card";
import { cardSection, imageViewPopup, userInfo } from "../pages";
import { cardTemplateSelector } from "./constants";

export function addCardToPage(data) {
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
  cardSection.addItem(cardElement);
}

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
}

export function logError(err) {
  console.log(`Error: ${err}`);
}
