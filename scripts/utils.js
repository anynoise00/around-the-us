import { cardList, addCard } from "./index.js";

const editProfileForm = document.querySelector(".form_type_edit-profile");
const profileFormName = editProfileForm.querySelector(
  ".form__field[name='name']"
);
const profileFormDesc = editProfileForm.querySelector(
  ".form__field[name='description']"
);

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDesc = profile.querySelector(".profile__description");

function openProfileForm() {
  profileFormName.value = profileName.textContent;
  profileFormDesc.value = profileDesc.textContent;
  editProfileForm.parentElement.classList.add("popup_visible");
}

function closeProfileForm() {
  closePopup(editProfileForm.parentElement);
}

function handleProfileSubmit(ev) {
  ev.preventDefault();

  profileName.textContent = profileFormName.value;
  profileDesc.textContent = profileFormDesc.value;

  closeProfileForm();
}

const addImageForm = document.querySelector(".form_type_add-image");
const imageFormTitle = addImageForm.querySelector(".form__field[name='title']");
const imageFormLink = addImageForm.querySelector(".form__field[name='link']");

function openImageForm() {
  imageFormTitle.value = "";
  imageFormLink.value = "";
  addImageForm.parentElement.classList.add("popup_visible");
}

function closeImageForm() {
  closePopup(addImageForm.parentElement);
}

function handleImageFormSubmit(ev) {
  ev.preventDefault();

  addCard({
    name: imageFormTitle.value,
    link: imageFormLink.value,
  });
  cardList.renderItems();
  closeImageForm();
}

const imagePopup = document.querySelector(".image-popup").parentElement;
function openImagePopup(name, link, alt) {
  imagePopup.querySelector(".image-popup__title").textContent = name;

  const image = imagePopup.querySelector(".image-popup__image");
  image.src = link;
  image.alt = alt ? alt : `Uma imagem ampliada da paisagem do ${name}`;

  imagePopup.classList.add("popup_visible");
}

function closeImagePopup() {
  closePopup(imagePopup);
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_visible");
}

export {
  openProfileForm,
  closeProfileForm,
  handleProfileSubmit,
  openImageForm,
  closeImageForm,
  handleImageFormSubmit,
  openImagePopup,
  closeImagePopup,
  closePopup,
};
