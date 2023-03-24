const editProfileForm = document.querySelector(".form_type_edit-profile");
const editProfileFormInputName = editProfileForm.querySelector(".form__field[name='name']");
const editProfileFormInputDesc = editProfileForm.querySelector(".form__field[name='description']");
const editProfileFormCloseBtn = editProfileForm.querySelector(".form__button-close");

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDesc = profile.querySelector(".profile__description");
const editProfileBtn = profile.querySelector(".profile__button-edit");

editProfileBtn.addEventListener("click", openEditProfileForm);
editProfileFormCloseBtn.addEventListener("click", closeEditProfileForm);
editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

function openEditProfileForm() {
  editProfileForm.classList.add("form_visible");

  editProfileFormInputName.value = profileName.textContent;
  editProfileFormInputDesc.value = profileDesc.textContent;
}

function closeEditProfileForm() {
  editProfileForm.classList.remove("form_visible");
}

function handleEditProfileFormSubmit(ev) {
  ev.preventDefault();

  profileName.textContent = editProfileFormInputName.value;
  profileDesc.textContent = editProfileFormInputDesc.value;

  closeEditProfileForm(ev);
}

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

const cardsContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;

initialCards.forEach((elem) => {
  addCard(elem.title, elem.link)
});

function addCard(title, link) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = title;
  
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;

  const likeButton = cardElement.querySelector(".card__like");
  likeButton.addEventListener("click", toggleLikeButton);

  cardsContainer.append(cardElement);
}

function toggleLikeButton(ev) {
  ev.target.classList.toggle("card__like_active");
}

const addImageForm = document.querySelector(".form_type_add-image");
const addImageFormInputTitle = addImageForm.querySelector(".form__field[name='title']");
const addImageFormInputLink = addImageForm.querySelector(".form__field[name='link']");
const addImageFormCloseBtn = addImageForm.querySelector(".form__button-close");

const addImageBtn = profile.querySelector(".profile__button-add");

addImageBtn.addEventListener("click", openAddImageForm);
addImageFormCloseBtn.addEventListener("click", closeAddImageForm);
addImageForm.addEventListener("submit", handleAddImageFormSubmit);

function openAddImageForm() {
  addImageFormInputTitle.value = "";
  addImageFormInputLink.value = "";

  addImageForm.classList.add("form_visible");
}

function closeAddImageForm() {
  addImageForm.classList.remove("form_visible");
}

function handleAddImageFormSubmit(ev) {
  ev.preventDefault();

  const title = addImageFormInputTitle.value;
  const link = addImageFormInputLink.value;

  addCard(title, link);

  closeAddImageForm(ev);
}