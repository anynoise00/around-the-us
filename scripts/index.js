const editForm = document.querySelector(".edit-form");
const editFormInputName = editForm.querySelector(".edit-form__field[name='name']");
const editFormInputDesc = editForm.querySelector(".edit-form__field[name='description']");
const closeFormBtn = editForm.querySelector(".edit-form__button-close");

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDesc = profile.querySelector(".profile__description");
const editProfileBtn = profile.querySelector(".profile__button-edit");

editProfileBtn.addEventListener("click", openEditForm);
closeFormBtn.addEventListener("click", closeEditForm);
editForm.addEventListener("submit", handleEditFormSubmit);

function openEditForm() {
  editForm.classList.add("edit-form_visible");

  editFormInputName.value = profileName.textContent;
  editFormInputDesc.value = profileDesc.textContent;
}

function closeEditForm() {
  editForm.classList.remove("edit-form_visible");
}

function handleEditFormSubmit(ev) {
  ev.preventDefault();

  profileName.textContent = editFormInputName.value;
  profileDesc.textContent = editFormInputDesc.value;

  closeEditForm(ev);
}

const cardLikeButtons = document.querySelectorAll(".card__like");

cardLikeButtons.forEach((el) => {
  el.addEventListener("click", toggleLikeButton);
});

function toggleLikeButton(ev) {
  ev.target.classList.toggle("card__like_active");
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
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = elem.link;

  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = elem.name;

  cardsContainer.append(cardElement);
});