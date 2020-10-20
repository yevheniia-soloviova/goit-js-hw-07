const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("#gallery");

const imageCreator = (array) => {
  let imageArray = array.map((element) => {
    console.log(array);
    const imageElement = document.createElement("img");
    imageElement.classList.add("list-image");
    imageElement.src = element.url;
    imageElement.alt = element.alt;

    return imageElement;
  });

  let liArray = imageArray.map((element) => {
    const liElement = document.createElement("li");
    liElement.classList.add("list-element");
    liElement.appendChild(element);
    console.log(liElement);
    return liElement;
  });
  galleryList.append(...liArray);
};

console.log(imageCreator(images));
