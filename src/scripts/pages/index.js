import "../../pages/index.css";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
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
  profileAboutSelector,
  groupId,
  token,
  profileAvatarSelector,
} from "../utils/constants.js";
import Api from "../components/Api";
import { addCardToPage } from "../utils/utils";

const aroundApi = new Api({
  baseUrl: `https://around.nomoreparties.co/v1/${groupId}`,
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector
);

aroundApi.getUserData().then((result) => {
  userInfo.setUserInfo(result);
  userInfo.setUserAvatar(result);
});

export let cardList = null;
aroundApi
  .getInitialCards()
  .then((result) => {
    cardList = new Section(
      { items: result, renderer: addCardToPage },
      cardListSelector
    );
  })
  .then(() => cardList.renderItems());

const editProfilePopup = new PopupWithForm(
  {
    handleFormSubmit: (ev, values) => {
      ev.preventDefault();
      aroundApi
        .updateUserData({ name: values.name, about: values.about })
        .then((result) => {
          userInfo.setUserInfo(result);
          editProfilePopup.close();
        });
    },
    onOpen: () => editProfilePopup.setFormValues(userInfo.getUserInfo()),
    onClose: () => profileValidator.clearWarnings(),
  },
  editProfilePopupSelector
);

const addImagePopup = new PopupWithForm(
  {
    handleFormSubmit: (ev, values) => {
      ev.preventDefault();
      aroundApi
        .addCard({ name: values.title, link: values.link })
        .then((result) => {
          addCardToPage(result);
          addImagePopup.close();
        });
    },
    onClose: () => addImageValidator.clearWarnings(),
  },
  addImagePopupSelector
);

export const imageViewPopup = new PopupWithImage(viewerPopupSelector);
const profileValidator = new FormValidator(formConfig, editProfileFormSelector);
const addImageValidator = new FormValidator(formConfig, addImageFormSelector);

addImagePopup.setEventListeners();
editProfilePopup.setEventListeners();
imageViewPopup.setEventListeners();
addImageBtn.addEventListener("click", () => addImagePopup.open());
editProfileBtn.addEventListener("click", () => editProfilePopup.open());
profileValidator.enableValidation();
addImageValidator.enableValidation();
