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

export const initialProfileInfo = {
  name: "Jacques Cousteau",
  description: "Explorador",
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

export const enlargedImage = document.querySelector(".image-popup__image");
export const profile = document.querySelector(".profile");
export const profileName = profile.querySelector(".profile__name");
export const profileDesc = profile.querySelector(".profile__description");
export const editProfileBtn = profile.querySelector(".profile__button-edit");
export const addImageBtn = profile.querySelector(".profile__button-add");
