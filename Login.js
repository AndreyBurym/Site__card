let email = document.querySelector(".email")
email.addEventListener("input", function (){
    let emailValue = email.value
    if (emailValue.length > 5) {
        email.classList.add("challenger")
        email.classList.remove("unknown");
    }
    else if (emailValue.length === 0) {
        email.classList.remove("unknown")
        email.classList.remove("challenger")
    } else {
        email.classList.add("unknown")
        email.classList.remove("challenger");
    }
})

let phoneNumber = document.querySelector(".number");

phoneNumber.addEventListener("input", function () {
    let phoneNumberValue = phoneNumber.value;

if (phoneNumberValue.length === 12) {
    phoneNumber.classList.add("challenger");
    phoneNumber.classList.remove("unknown");
}
else if (phoneNumberValue.length === 0) {
    phoneNumber.classList.remove("unknown");
    phoneNumber.classList.remove("challenger");
} else {
    phoneNumber.classList.add("unknown");
    phoneNumber.classList.remove("challenger");
}
});

let newPassword = document.querySelector(".password");

newPassword.addEventListener("input", function () {
let newPasswordValue = newPassword.value;

if (newPasswordValue.length > 6) {
    newPassword.classList.add("challenger");
    newPassword.classList.remove("unknown");
}
else if (phoneNumber.length === 0) {
    phoneNumber.classList.remove("unknown");
    phoneNumber.classList.remove("challenger");
} else {
    newPassword.classList.add("unknown");
    newPassword.classList.remove("challenger");
}
});

/* document.addEventListener("DOMContentLoaded", function () {
  let email = document.querySelector(".email");
  let password = document.querySelector(".password");
  let name = document.querySelector(".name");
  let number = document.querySelector(".number");
  let button = document.querySelector("button");

  email.addEventListener("input", updateInputStyles);
  email.addEventListener("change", updateInputStyles);

  password.addEventListener("input", updateInputStyles);
  password.addEventListener("change", updateInputStyles);

  name.addEventListener("input", updateInputStyles);
  name.addEventListener("change", updateInputStyles);

  number.addEventListener("input", updateInputStyles);
  number.addEventListener("change", updateInputStyles);

  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (areAllInputsValid()) {
      alert("You received the card!");
    }
  });

  function updateInputStyles(event) {
    let inputElement = event.target;
    checkInputLength(inputElement, 6, "challenger");
  }

  function checkInputLength(inputElement, minLength, validClass) {
    let inputValue = inputElement.value;

    if (inputValue.length >= minLength) {
      inputElement.classList.add(validClass);
      inputElement.classList.remove("unknown");
    } else if (inputValue.length === 0) {
      inputElement.classList.remove("unknown");
      inputElement.classList.remove(validClass);
    } else {
      inputElement.classList.remove(validClass);
      inputElement.classList.add("unknown");
    }
  }

  function areAllInputsValid() {
    return (
      email.classList.contains("challenger") &&
      password.classList.contains("challenger") &&
      name.classList.contains("challenger") &&
      number.classList.contains("challenger")
    );
  }
}); */



















let button = document.querySelector(".button")
button.addEventListener("click", function () {
  let email = document.querySelector(".email")
  let password = document.querySelector(".password")
  let name = document.querySelector(".name")
  let number = document.querySelector(".number")

  let userEmail = email.value
  let userPassword = password.value
  let userName = name.value
  let userNumber = number.value

  if (userEmail.length === 0) {
    alert("Please write your email");
    return;
  } else if (userPassword.length < 7) {
    alert("Password don't need to be less than 7 symbols");
    return;
  } else if (userNumber.length !== 13 || !userNumber.includes("+")) {
    alert("Number needs to includes + and 13 symbols");
    return;
  } else if (!userEmail.includes("@") || userEmail.includes(".") ) {
    alert("Your email needs to include @ and .");
    return;
  }
  else {
    window.location.href = "../index.html"
  }
})