import Card from "./Card.js";
import { cardList } from "./index.js";
import { cardTemplate } from "./utils/constants.js";

export function addCard(item) {
  const card = new Card(item, cardTemplate);
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
}

const editProfileForm = document.querySelector(".form_type_edit-profile");
const profileFormName = editProfileForm.querySelector(
  ".form__field[name='name']"
);
const profileFormDesc = editProfileForm.querySelector(
  ".form__field[name='description']"
);

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDesc = profile.querySelector(".profile__description");

function openProfileForm() {
  profileFormName.value = profileName.textContent;
  profileFormDesc.value = profileDesc.textContent;
  editProfileForm.parentElement.classList.add("popup_visible");
}

function openImagePopup() {
  console.log("deprecated");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_visible");
}

export {
  openImagePopup,
  openProfileForm,
  closePopup,
};
