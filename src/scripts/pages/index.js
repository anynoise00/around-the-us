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
  confirmationPopupSelector,
  profileAvatarOverlay,
  editAvatarPopupSelector,
  editAvatarFormSelector,
} from "../utils/constants.js";
import Api from "../components/Api";
import { addCardToPage, alertError } from "../utils/utils";
import ConfirmationPopup from "../components/ConfirmationPopup";

export const aroundApi = new Api({
  baseUrl: `https://around.nomoreparties.co/v1/${groupId}`,
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
});

export let userInfo = {};
export let cardSection = {};

aroundApi
  .getUserData()
  .then((result) => {
    userInfo = new UserInfo(
      { data: result },
      {
        nameSelector: profileNameSelector,
        aboutSelector: profileAboutSelector,
        avatarSelector: profileAvatarSelector,
      }
    );

    userInfo.setUserInfo(result);
    userInfo.setUserAvatar(result);
  })
  .then(() => {
    aroundApi
      .getInitialCards()
      .then((result) => {
        cardSection = new Section(
          { items: result, renderer: addCardToPage },
          cardListSelector
        );
      })
      .then(() => cardSection.renderItems())
      .catch(alertError);
  })
  .catch(alertError);

const editProfilePopup = new PopupWithForm(
  {
    handleFormSubmit: (ev, values) => {
      ev.preventDefault();
      aroundApi
        .updateUserData({ name: values.name, about: values.about })
        .then((result) => {
          userInfo.setUserInfo(result);
          editProfilePopup.close();
        })
        .catch(alertError);
    },
    submitDefaultText: "Salvar",
    submitSendText: "Salvando...",
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
        })
        .catch(alertError);
    },
    submitDefaultText: "Criar",
    submitSendText: "Criando...",
    onClose: () => addImageValidator.clearWarnings(),
  },
  addImagePopupSelector
);

const editAvatarPopup = new PopupWithForm(
  {
    handleFormSubmit: (ev, values) => {
      ev.preventDefault();
      aroundApi
        .updateAvatar({ avatar: values.avatar })
        .then(() => {
          userInfo.setUserAvatar({ avatar: values.avatar });
          editAvatarPopup.close();
        })
        .catch((err) => {
          editAvatarPopup.close();
          alertError(err);
        });
    },
    submitDefaultText: "Salvar",
    submitSendText: "Salvando...",
    onClose: () => editAvatarValidator.clearWarnings(),
  },
  editAvatarPopupSelector
);

export const imageViewPopup = new PopupWithImage(viewerPopupSelector);
const profileValidator = new FormValidator(formConfig, editProfileFormSelector);
const addImageValidator = new FormValidator(formConfig, addImageFormSelector);
const editAvatarValidator = new FormValidator(
  formConfig,
  editAvatarFormSelector
);

export const deleteConfirmPopup = new ConfirmationPopup(
  confirmationPopupSelector
);

addImageBtn.addEventListener("click", () => addImagePopup.open());
editProfileBtn.addEventListener("click", () => editProfilePopup.open());
profileAvatarOverlay.addEventListener("click", () => editAvatarPopup.open());

addImagePopup.setEventListeners();
editProfilePopup.setEventListeners();
editAvatarPopup.setEventListeners();
imageViewPopup.setEventListeners();
deleteConfirmPopup.setEventListeners();
profileValidator.enableValidation();
addImageValidator.enableValidation();
editAvatarValidator.enableValidation();
