import {
  handleProfileSubmit,
  handleImageFormSubmit,
  closePopup,
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Card from "./Card.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import { initialCards, cardListSelector, formConfig, editProfileFormSelector, addImageFormSelector, editProfilePopupSelector, addImagePopupSelector, viewerPopupSelector, cardTemplate, editProfileBtn, addImageBtn } from "./utils/constants.js";

const profileValidator = new FormValidator(formConfig, editProfileFormSelector);
profileValidator.enableValidation();

const addImageValidator = new FormValidator(formConfig, addImageFormSelector);
addImageValidator.enableValidation();

export const cardList = new Section(
  { items: initialCards, renderer: (item) => addCard(item) },
  cardListSelector
);

export const editProfilePopup = new Popup(editProfilePopupSelector);
editProfilePopup.setEventListeners();
editProfileBtn.addEventListener("click", () => editProfilePopup.open());

export const addImagePopup = new Popup(addImagePopupSelector);
addImagePopup.setEventListeners();
addImageBtn.addEventListener("click", () => addImagePopup.open());

export const imageViewPopup = new PopupWithImage(viewerPopupSelector);
imageViewPopup.setEventListeners();

cardList.renderItems();

export function addCard(item) {
  const card = new Card(item, cardTemplate);
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
}




const editProfileForm = document.querySelector(".form_type_edit-profile");
editProfileForm.addEventListener("submit", handleProfileSubmit);

const addImageForm = document.querySelector(".form_type_add-image");
addImageForm.addEventListener("submit", handleImageFormSubmit);

// to do
document.addEventListener("keydown", (ev) => {
  const openPopup = document.querySelector(".popup_visible");
  if (openPopup && ev.key === "Escape") {
    closePopup(openPopup);
  }
});
