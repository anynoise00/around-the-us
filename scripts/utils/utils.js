import Card from "../components/Card.js";
import { cardList } from "../pages/index.js";
import { cardTemplate } from "./constants.js";

export function addCard(item) {
  const card = new Card(item, cardTemplate);
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
}

function openProfileForm() {
  console.log("to do: change form initial info");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_visible");
}

export { openProfileForm, closePopup };
