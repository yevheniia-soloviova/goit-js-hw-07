const listOfIngredients = document.querySelector("ul");
console.log(listOfIngredients);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const addingIngredientsToList = function (array) {
  let ingredientsItems = array.map((element) => {
    const liItem = document.createElement("li");
    liItem.textContent = element;
    return liItem;
  });
  listOfIngredients.append(...ingredientsItems);
};

console.log(addingIngredientsToList(ingredients));
