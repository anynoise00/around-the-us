const editForm = document.querySelector(".edit-form");
const editFormInputName = editForm.querySelector(".edit-form__field[name='name']");
const editFormInputDesc = editForm.querySelector(".edit-form__field[name='description']");
const submitFormBtn = editForm.querySelector(".edit-form__button-submit");
const closeFormBtn = editForm.querySelector(".edit-form__button-close");

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const profileDesc = profile.querySelector(".profile__description");
const editProfileBtn = profile.querySelector(".profile__button-edit");

editProfileBtn.addEventListener("click", openEditForm);
closeFormBtn.addEventListener("click", closeEditForm);
submitFormBtn.addEventListener("click", submitForm);

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

function submitForm(ev) {
  ev.preventDefault();

  profileName.textContent = editFormInputName.value;
  profileDesc.textContent = editFormInputDesc.value;

  closeEditForm(ev);
}