import {
  openProfileForm,
  closeProfileForm,
  handleProfileSubmit,
  openImageForm,
  closeImageForm,
  handleImageFormSubmit,
  closeImagePopup,
  closePopup,
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { initialCards, cardListSelector } from "./utils/constants.js";

import Section from "./Section.js";

export const cardList = new Section(
  { items: initialCards, renderer: (item) => addCard(item) },
  cardListSelector
);

cardList.renderItems();

export function addCard(item) {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
}

const profileElement = document.querySelector(".profile");
const profileName = "Jacques Cousteau";
const profileDescription = "Explorador";

profileElement.querySelector(".profile__name").textContent = profileName;
profileElement.querySelector(".profile__description").textContent =
  profileDescription;

const imagePopup = document.querySelector(".image-popup").parentElement;
imagePopup
  .querySelector(".popup__button-close")
  .addEventListener("click", closeImagePopup);

const formConfig = {
  inputSelector: ".form__field",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "form__button-submit_inactive",
  inputErrorClass: "form__field_type_error",
  errorClass: "form__input-error_active",
};

const editProfileFV = new FormValidator(formConfig, ".form_type_edit-profile");
editProfileFV.enableValidation();

const ImageFV = new FormValidator(formConfig, ".form_type_add-image");
ImageFV.enableValidation();

const profile = document.querySelector(".profile");
const editProfileForm = document.querySelector(".form_type_edit-profile");
const btnEditProfile = profile.querySelector(".profile__button-edit");
const btnCloseProfileForm = editProfileForm.querySelector(
  ".popup__button-close"
);

btnEditProfile.addEventListener("click", openProfileForm);
btnCloseProfileForm.addEventListener("click", closeProfileForm);
editProfileForm.addEventListener("submit", handleProfileSubmit);

const addImageForm = document.querySelector(".form_type_add-image");
const btnAddImage = profile.querySelector(".profile__button-add");
const btnCloseImageForm = addImageForm.querySelector(".popup__button-close");

btnAddImage.addEventListener("click", openImageForm);
btnCloseImageForm.addEventListener("click", closeImageForm);
addImageForm.addEventListener("submit", handleImageFormSubmit);

const popupList = Array.from(document.querySelectorAll(".popup"));
popupList.forEach((popupElement) => {
  const popupOverlay = popupElement.querySelector(".popup__overlay");
  popupOverlay.addEventListener("click", () => {
    closePopup(popupElement);
  });
});

document.addEventListener("keydown", (ev) => {
  const openPopup = document.querySelector(".popup_visible");
  if (openPopup && ev.key === "Escape") {
    closePopup(openPopup);
  }
});
