import Card from "../components/Card.js";
import { cardList, imageViewPopup } from "../pages/index.js";
import { cardTemplate, popupVisible } from "./constants.js";

export function addCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick: (imgData) => {
        imageViewPopup.open(imgData);
      },
    },
    cardTemplate
  );
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
}
