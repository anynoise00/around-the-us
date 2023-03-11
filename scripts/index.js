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

function openEditForm(ev) {
  ev.preventDefault();

  editForm.classList.add("edit-form_visible");

  editFormInputName.value = profileName.textContent;
  editFormInputDesc.value = profileDesc.textContent;
}

function closeEditForm(ev) {
  ev.preventDefault();
  editForm.classList.remove("edit-form_visible");
}

function handleEditFormSubmit(ev) {
  ev.preventDefault();

  profileName.textContent = editFormInputName.value;
  profileDesc.textContent = editFormInputDesc.value;

  closeEditForm(ev);
}

const elementLikeButtons = document.querySelectorAll(".element__like");
console.dir(elementLikeButtons);

elementLikeButtons.forEach((el) => {
  el.addEventListener("click", toggleLikeButton);
});

function toggleLikeButton(ev) {
  ev.preventDefault();
  ev.target.classList.toggle("element__like_active");
}