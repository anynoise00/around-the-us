export const initialCards = [
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

export const groupId = "web_ptbr_04";
export const token = "56988fc2-c072-4a64-b0a6-6eaae5ae8b3e";

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
