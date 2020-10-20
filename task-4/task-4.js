let counter = 0;

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const counterWindow = document.querySelector("#value");

console.log(counterWindow);

const increment = function () {
  counter += 1;
  counterWindow.textContent = counter;
};

const decrement = function () {
  counter -= 1;
  counterWindow.textContent = counter;
};

buttonIncrement.addEventListener("click", increment);

buttonDecrement.addEventListener("click", decrement);

console.log(counter);
