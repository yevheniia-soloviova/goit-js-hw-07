const inputRef = document.querySelector("#validation-input");

const onInputFocus = function () {
  console.log("Инпут получил фокус");
};

const validLength = inputRef.dataset.length;
console.log(validLength);

const onInputBlur = function () {
  console.log("Инпут потерял фокус");
  inputRef.value.length < validLength
    ? inputRef.classList.add("invalid")
    : inputRef.classList.replace("invalid", "valid");
  console.log(inputRef.value.length);
  console.log(validLength);
};

inputRef.addEventListener("focus", onInputFocus);
inputRef.addEventListener("blur", onInputBlur);
