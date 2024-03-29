export const formConfig = {
  inputSelector: ".form__field",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "form__button-submit_inactive",
  inputErrorClass: "form__field_type_error",
  errorClass: "form__input-error_active",
};

export const groupId = "web_ptbr_04";
export const token = "56988fc2-c072-4a64-b0a6-6eaae5ae8b3e";

export const formSelector = ".form";
export const formFieldSelector = ".form__field";
export const formSubmitSelector = ".form__button-submit";

export const editProfileFormSelector = ".form_type_edit-profile";
export const editProfilePopupSelector = "#popup-edit-profile";

export const editAvatarPopupSelector = "#popup-edit-avatar";
export const editAvatarFormSelector = ".form_type_edit-avatar";

export const addImagePopupSelector = "#popup-add-image";
export const addImageFormSelector = ".form_type_add-image";

export const viewerPopupSelector = "#popup-image-view";

export const profileNameSelector = ".profile__name";
export const profileAboutSelector = ".profile__description";
export const profileAvatarSelector = ".profile__avatar";

export const popupCloseBtnSelector = ".popup__button-close";
export const popupOverlaySelector = ".popup__overlay";
export const popupConfirmBtnSelector = ".popup__button-confirm";
export const popupVisible = "popup_visible";

export const cardListSelector = ".cards";
export const cardTemplateSelector = "#card-template";
export const cardSelector = ".card";
export const cardTitleSelector = ".card__title";
export const cardImageSelector = ".card__image";
export const cardLikeBtnSelector = ".card__button-like";
export const cardLikeCounterSelector = ".card__like-counter";
export const cardDeleteBtnSelector = ".card__button-delete";
export const cardViewBtnSelector = ".card__button-view-image";
export const cardBtnLikeActive = "card__button-like_active";
export const cardBtnDeleteHidden = "card__button-delete_hidden";
export const confirmationPopupSelector = "#popup-confirmation";

export const enlargedImage = document.querySelector(".image-popup__image");
export const enlargedImageTitle = document.querySelector(".image-popup__title");
export const profile = document.querySelector(".profile");
export const editProfileBtn = profile.querySelector(".profile__button-edit");
export const addImageBtn = profile.querySelector(".profile__button-add");
export const profileAvatarOverlay = profile.querySelector(
  ".profile__avatar-overlay"
);
