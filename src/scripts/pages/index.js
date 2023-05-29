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
import { addCard } from "../utils/utils.js";
import Api from "../components/Api";

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

export let cardList = null;

aroundApi.getUserData().then((result) => {
  userInfo.setUserInfo(result);
  userInfo.setUserAvatar(result.avatar);
});

aroundApi
  .getInitialCards()
  .then((result) => {
    cardList = new Section(
      { items: result, renderer: addCard },
      cardListSelector
    );
  })
  .then(() => cardList.renderItems());

export const imageViewPopup = new PopupWithImage(viewerPopupSelector);

const editProfilePopup = new PopupWithForm(
  {
    handleFormSubmit: (ev, values) => {
      ev.preventDefault();
      userInfo.setUserInfo({ name: values.name, work: values.work });
      editProfilePopup.close();
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

      addCard({
        name: values.title,
        link: values.link,
      });

      addImagePopup.close();
    },
    onClose: () => addImageValidator.clearWarnings(),
  },
  addImagePopupSelector
);

const profileValidator = new FormValidator(formConfig, editProfileFormSelector);
const addImageValidator = new FormValidator(formConfig, addImageFormSelector);

addImagePopup.setEventListeners();
editProfilePopup.setEventListeners();
imageViewPopup.setEventListeners();
addImageBtn.addEventListener("click", () => addImagePopup.open());
editProfileBtn.addEventListener("click", () => editProfilePopup.open());
profileValidator.enableValidation();
addImageValidator.enableValidation();
