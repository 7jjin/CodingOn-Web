const slide = document.querySelector(".img_content");
const slideImg = document.querySelectorAll(".img_content li");
let currentIndex = 0;
const slideCount = slideImg.length;
const prev = document.querySelector(".button_before");
const next = document.querySelector(".button_next");
const slidWidth = 400;

slide.style.width = slidWidth * slideCount + "px";
console.log(slidWidth * slideCount + "px");
function moveSilde(num) {
  slide.style.width = -num * 400 + "px";
  console.log(slide.style.width);
  currentIndex = num;
}

prev.addEventListener("click", function () {
  console.log("a");
  if (currentIndex !== 0) moveSilde(currentIndex - 1);
});

next.addEventListener("click", function () {
  if (currentIndex !== slideCount - 1) {
    console.log("b");
    console.log(currentIndex);
    moveSilde(currentIndex + 1);
  }
});
