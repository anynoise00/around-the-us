import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
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
  profileNameSelector,
  profileWorkSelector,
  initialUserInfo,
} from "../utils/constants.js";
import { addCard, closePopup } from "../utils/utils.js";

const userInfo = new UserInfo(profileNameSelector, profileWorkSelector);

export const cardList = new Section(
  { items: initialCards, renderer: (item) => addCard(item) },
  cardListSelector
);

export const imageViewPopup = new PopupWithImage(viewerPopupSelector);

const editProfilePopup = new PopupWithForm(
  {
    handleFormSubmit: (ev, values) => {
      ev.preventDefault();
      userInfo.setUserInfo({ name: values.name, work: values.description });
      editProfilePopup.close();
    },
  },
  editProfilePopupSelector
);

const addImagePopup = new PopupWithForm(
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

const profileValidator = new FormValidator(formConfig, editProfileFormSelector);
const addImageValidator = new FormValidator(formConfig, addImageFormSelector);

userInfo.setUserInfo(initialUserInfo)
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
