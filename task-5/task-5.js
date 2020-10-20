const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const onInputFocus = function () {
  console.log("Инпут получил фокус");
};

const onInputBlur = function () {
  console.log("Инпут потерял фокус");
};

const onInputСhange = function (event) {
  console.log(event.currentTarget.value);

  event.currentTarget.value === ""
    ? (spanRef.textContent = "незнакомец")
    : (spanRef.textContent = event.currentTarget.value);
};

inputRef.addEventListener("focus", onInputFocus);
inputRef.addEventListener("blur", onInputBlur);
inputRef.addEventListener("input", onInputСhange);
