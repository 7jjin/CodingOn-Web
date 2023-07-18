var slideIndex = 1;
var slides = document.querySelectorAll(".img_content li");
var prevBtn = document.querySelector(".button_before");
var nextBtn = document.querySelector(".button_next");

showSlide(slideIndex);

prevBtn.addEventListener("click", function () {
  slideIndex--;
  showSlide(slideIndex);
});

nextBtn.addEventListener("click", function () {
  slideIndex++;
  showSlide(slideIndex);
});

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 현재 슬라이드, 이전 슬라이드, 다음 슬라이드만 보이도록 설정
  slides[slideIndex].style.display = "flex";
  slides[slideIndex].style.flexDirection = "column";
  slides[slideIndex].style.transform = "rotate(0deg)";

  var prevIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
  slides[prevIndex].style.display = "flex";
  slides[prevIndex].style.transform = "rotate(-15deg)";
  slides[prevIndex].style.flexDirection = "column";

  var nextIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
  slides[nextIndex].style.display = "flex";
  slides[nextIndex].style.transform = "rotate(15deg)";

  slides[nextIndex].style.flexDirection = "column";
}
