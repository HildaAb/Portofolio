function submitSend() {
  alert("The form has been sent!");
}

let formElement = document.querySelector("#home-contact");
formElement.addEventListener("submit", submitSend);
