document.addEventListener("DOMContentLoaded", function () {
  let myNumber = document.querySelector(".card__number");
  let textArea = document.querySelector(".input__number-card");
  let generateRandomButton = document.getElementById("generateRandom")

  textArea.addEventListener("input", function () {
    formatCreditCardNumber();
  });

  generateRandomButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const randomCreditCardNumber = generateRandomCreditCardNumber();
    textArea.value = randomCreditCardNumber;
    formatCreditCardNumber();
  });

  myNumber.innerText = textArea.value;

  function formatCreditCardNumber() {
    let newText = textArea.value.replace(/\s/g, ""); // Remove existing spaces
    newText = newText.replace(/\D/g, ""); // Remove non-digit characters
    let formattedText = "";

    for (let i = 0; i < newText.length; i++) {
      formattedText += newText[i];
      if ((i + 1) % 4 === 0 && i < newText.length - 1) {
        formattedText += " "; // Add a space after every fourth digit
      }
    }

    myNumber.innerText = formattedText;
  }

  function generateRandomCreditCardNumber() {
    const numDigits = 16;
    let randomNumber = "";
    for (let i = 0; i < numDigits; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
  }
});
let cardData = document.querySelector(".card__data");
let newData = document.querySelector(".input__card");

newData.addEventListener("change", function () {
  let newCardData = newData.value;
  let inputData = newCardData.split("-");

  if (inputData.length === 3) {
    let day = inputData[0];
    let month = inputData[1];
    let year = inputData[2];
    cardData.innerHTML = month + "/" + year;
  }
});

let textAbout = document.querySelector(".about")
let checkModal = document.querySelector(".check__modal")
textAbout.addEventListener("click", function () {
  if (checkModal.className === "check__modal") {
    checkModal.classList.add("active")
  }
  else {
    checkModal.classList.remove("active")
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.querySelector(".text__input");
  const nameSurname = document.querySelector(".name_surname");

  if (textInput && nameSurname) {
    textInput.addEventListener("input", function () {
      nameSurname.textContent = textInput.value;
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const checkInput = document.getElementById("check");
  const modal = document.getElementById("myModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modalBtn = document.getElementById("modalBtn");
  const hiddenText = document.getElementById("hiddenText");

  checkInput.addEventListener("change", function () {
    modal.style.display = checkInput.checked ? "flex" : "none";
    if (checkInput.checked) {
      hiddenText.classList.add("visible-text");
    } else {
      hiddenText.classList.remove("visible-text");
    }
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    checkInput.checked = false;
    hiddenText.classList.remove("visible-text");
  });

  modalBtn.addEventListener("click", function (event) {
    event.preventDefault();
    hiddenText.classList.toggle("visible-text");
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal && checkInput.checked) {
      modal.style.display = "none";
      checkInput.checked = false;
      hiddenText.classList.remove("visible-text");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const generateRandomNameButton =
    document.getElementById("generateRandomName");
  const nameInput = document.querySelector(".input__name");

  generateRandomNameButton.addEventListener("click", function () {
    const randomName = generateRandomName();
    nameInput.value = randomName;
  });

  function generateRandomName() {
    const names = ["Andrey", "Agent_Yaroslav", "Danch", "Egor", "Sasha", "Yarik", "Shevka", "Anastasia", "Inna", "Danil", "Sashko", "Viktoria", "Myrshavka"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
});
