import Card from "./Card.js";
import { cardList } from "./index.js";
import { cardTemplate } from "./utils/constants.js";

export function addCard(item) {
  const card = new Card(item, cardTemplate);
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
}

function openProfileForm() {
  console.log("to do: change form initial info")
}

function openImagePopup() {
  console.log("to do: change image on popup open");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_visible");
}

export {
  openImagePopup,
  openProfileForm,
  closePopup,
};
