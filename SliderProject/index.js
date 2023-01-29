const btnLeft = document.querySelector(".prev");
const btnRight = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const maxSlides = slides.length;
let currentSlide = 0;
const dotContainer = document.querySelector(".dots");

const goToSlide = function (Slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - Slide)}%)`;
  });
};

goToSlide(0);

const dotSliding = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
dotSliding();
function activeDot(slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`[data-slide="${slide}"]`) // data set of particular value
    .classList.add("dots__dot--active");
}
activeDot(0);

const nextSlide = function () {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else currentSlide++;
  goToSlide(currentSlide);
  activeDot(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else currentSlide--;
  goToSlide(currentSlide);
  activeDot(currentSlide);
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key == "ArrowRight") nextSlide();
  if (e.key == "ArrowLeft") prevSlide();
});
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    console.log(e.target);
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});
