import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
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

const profileElement = document.querySelector(".profile");
const profileName = "Jacques Cousteau";
const profileDescription = "Explorador";

profileElement.querySelector(".profile__name").textContent = profileName;
profileElement.querySelector(".profile__description").textContent = profileDescription;

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const cardsContainer = document.querySelector(".cards");

export function addCard(data) {
  const card = new Card(data, "#card-template");
  const cardElement = card.generateCard();

  cardsContainer.append(cardElement);
}

initialCards.forEach((data) => {
  addCard(data);
});

const imagePopup = document.querySelector(".image-popup").parentElement;
imagePopup.querySelector(".image-popup__button-close").addEventListener("click", closeImagePopup);

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
const btnCloseProfileForm = editProfileForm.querySelector(".form__button-close");

btnEditProfile.addEventListener("click", openProfileForm);
btnCloseProfileForm.addEventListener("click", closeProfileForm);
editProfileForm.addEventListener("submit", handleProfileSubmit);

const addImageForm = document.querySelector(".form_type_add-image");
const btnAddImage = profile.querySelector(".profile__button-add");
const btnCloseImageForm = addImageForm.querySelector(".form__button-close");

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
