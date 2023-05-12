import { addCard, closePopup } from "./utils.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import {
  initialCards,
  cardListSelector,
  formConfig,
  editProfileFormSelector,
  addImageFormSelector,
  editProfilePopupSelector,
  addImagePopupSelector,
  viewerPopupSelector,
  editProfileBtn,
  addImageBtn,
  profileName,
  profileDesc,
} from "./utils/constants.js";

const profileValidator = new FormValidator(formConfig, editProfileFormSelector);
const addImageValidator = new FormValidator(formConfig, addImageFormSelector);

export const cardList = new Section(
  { items: initialCards, renderer: (item) => addCard(item) },
  cardListSelector
);

export const editProfilePopup = new PopupWithForm(
  {
    handleFormSubmit: (ev, values) => {
      ev.preventDefault();

      profileName.textContent = values.name;
      profileDesc.textContent = values.description;

      editProfilePopup.close();
    },
  },
  editProfilePopupSelector
);

export const addImagePopup = new PopupWithForm(
  {
    handleFormSubmit: (ev, values) => {
      ev.preventDefault();

      addCard({
        name: values.title,
        link: values.link,
      });

      addImagePopup.close();
    },
  },
  addImagePopupSelector
);

export const imageViewPopup = new PopupWithImage(viewerPopupSelector);

addImagePopup.setEventListeners();
editProfilePopup.setEventListeners();
imageViewPopup.setEventListeners();
addImageBtn.addEventListener("click", () => addImagePopup.open());
editProfileBtn.addEventListener("click", () => editProfilePopup.open());
profileValidator.enableValidation();
addImageValidator.enableValidation();
cardList.renderItems();

// to do
document.addEventListener("keydown", (ev) => {
  const openPopup = document.querySelector(".popup_visible");
  if (openPopup && ev.key === "Escape") {
    closePopup(openPopup);
  }
});
