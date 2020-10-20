const ulItemRef = document.querySelectorAll("#categories");

let count = function (array) {
  let searchedCategory = "";
  let searchedQuantity = 0;
  array.forEach((element) => {
    element.querySelectorAll(".item").forEach((item) => {
      item.querySelectorAll("h2").forEach((category) => {
        searchedCategory = category.textContent;
      });

      item.querySelectorAll("ul").forEach((ulElement) => {
        searchedQuantity = ulElement.children.length;
      });
      console.log(
        `Категория: ${searchedCategory} \n\Количество элементов: ${searchedQuantity}`
      );
    });
  });
};

console.log(count(ulItemRef));
