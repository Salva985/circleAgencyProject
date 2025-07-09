// /js/contactValidation.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    [name, email, phone, message].forEach((input) => {
      input.classList.remove("is-invalid");
    });

    if (!/^[a-zA-Z\s]+$/.test(name.value.trim())) {
      name.classList.add("is-invalid");
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    }

    if (!/^[\d\s()+-]+$/.test(phone.value.trim())) {
      phone.classList.add("is-invalid");
      valid = false;
    }

    if (message.value.trim() === "") {
      message.classList.add("is-invalid");
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});