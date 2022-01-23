const imageArray = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const getImage = imageArray[Math.floor(Math.random() * imageArray.length)];

const setImage = document.createElement("img");

setImage.src = `./img/${getImage}`;
setImage.classList.add("backgroundImg");
document.body.appendChild(setImage);