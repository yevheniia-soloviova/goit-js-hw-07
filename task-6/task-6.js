const validationInput = document.querySelector("#validation-input");

function inputFocusChange() {
  if (validationInput.value.length == validationInput.dataset.length) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  }
  if (validationInput.value.length != validationInput.dataset.length) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
  if (validationInput.value.length == 0) {
    validationInput.classList.remove("invalid");
  }
  
}
validationInput.addEventListener("blur", inputFocusChange);

