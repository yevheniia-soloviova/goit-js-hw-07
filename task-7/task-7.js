const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

const onInputСhange = function (event) {
  spanRef.style.fontSize = event.currentTarget.value + "px";
  console.log(spanRef.style.fontSize);
};

inputRef.addEventListener("input", onInputСhange);
