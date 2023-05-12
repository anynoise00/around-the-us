export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: new URL("../../images/element_vale-de-yosemite.png", import.meta.url),
  },
  {
    name: "Lago Louise",
    link: new URL("../../images/element_vale-de-yosemite.png", import.meta.url),
  },
  {
    name: "Montanhas Carecas",
    link: new URL(
      "../../images/element_montanhas-carecas.png",
      import.meta.url
    ),
  },
  {
    name: "Latemar",
    link: new URL("../../images/element_latemar.png", import.meta.url),
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: new URL(
      "../../images/element_vanoise-national-park.png",
      import.meta.url
    ),
  },
  {
    name: "Lago di Braies",
    link: new URL("../../images/element_lago-de-braies.png", import.meta.url),
  },
];

export const initialUserInfo = {
  name: "Jacques Cousteau",
  work: "Explorador",
};

export const formConfig = {
  inputSelector: ".form__field",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "form__button-submit_inactive",
  inputErrorClass: "form__field_type_error",
  errorClass: "form__input-error_active",
};

export const cardTemplate = "#card-template";
export const cardListSelector = ".cards";
export const editProfilePopupSelector = "#popup-edit-profile";
export const editProfileFormSelector = ".form_type_edit-profile";
export const addImagePopupSelector = "#popup-add-image";
export const addImageFormSelector = ".form_type_add-image";
export const viewerPopupSelector = "#popup-image-view";
export const formSelector = ".form";
export const formFieldSelector = ".form__field";
export const profileNameSelector = ".profile__name";
export const profileWorkSelector = ".profile__description";
export const popupCloseBtnSelector = ".popup__button-close";
export const popupOverlaySelector = ".popup__overlay";
export const popupVisible = "popup_visible";
export const cardTitleSelector = ".card__title";
export const cardImageSelector = ".card__image";
export const cardLikeBtnSelector = ".card__button-like";
export const cardDeleteBtnSelector = ".card__button-delete";
export const cardViewBtnSelector = ".card__button-view-image";

export const enlargedImage = document.querySelector(".image-popup__image");
export const enlargedImageTitle = document.querySelector(".image-popup__title");
export const profile = document.querySelector(".profile");
export const editProfileBtn = profile.querySelector(".profile__button-edit");
export const addImageBtn = profile.querySelector(".profile__button-add");
