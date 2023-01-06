const emailForm = document.querySelector("#email-form");
const email = document.querySelector("#email");

emailForm.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  if (email.value.length === 0) {
    email.classList.add("input-error");
    email.nextElementSibling.style.display = "block";
    email.nextElementSibling.textContent = "Email cannot be empty!";
  } else {
    const mailFormat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email.value.match(mailFormat)) {
      email.classList.remove("input-error");
      email.nextElementSibling.style.display = "none";
      emailForm.reset();

      //Do something with the data here
    } else {
      email.classList.add("input-error");
      email.nextElementSibling.style.display = "block";
      email.nextElementSibling.textContent =
        "Please provide a valid email address.";
    }
  }
}
