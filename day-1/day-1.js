const button = document.getElementById("next");
var totalElements = 2;
var index = 0;

button.onclick = function (e) {
  console.log("click");
  var currentImage = document.getElementById(`img-${index}`);
  index++;
  if (index >= totalElements) {
    index = 0;
  }
  var nextImage = document.getElementById(`img-${index}`);
  currentImage.classList.add("transition-start");
  currentImage.classList.add("right");
  nextImage.classList.add("transition-end");
  nextImage.classList.add("right");

  currentImage.onanimationend = function (e) {
    currentImage.classList.remove("active");
    currentImage.classList.remove("transition-start");
    currentImage.classList.remove("right");   
  };
  nextImage.onanimationend = function (e) {
    nextImage.classList.add("active");
    nextImage.classList.remove("transition-end");
    nextImage.classList.remove("right");
  }
};
