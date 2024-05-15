const aroowLeft = document.querySelector(".arrow-left");
const aroowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".f-slide");
const slick = document.querySelector(".slick-list");
const slider = document.querySelector(".fon-slider");

let slideIndex = 0;
const slickDots = [];

function createSlikDots() {
  const item = document.createElement("li");
  item.className = "slick-dots";
  slick.appendChild(item);
  slickDots.push(item);
  item.style.display = 'none';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function addDots() {
  slides.forEach(createSlikDots);
  slickDots[0].classList.add("active");
  slickDots.forEach((dots, index) =>
    dots.addEventListener("click", () => changeSlide(index)))
}

function addActiveClass() {
  slickDots[slideIndex].classList.add("active");
}

function removeActiveClass() {
  slickDots[slideIndex].classList.remove("active");
}

function showSlide() {
  // slides[slideIndex].classList.add("view");
  slider.setAttribute('style', `transform: translateX(-${slideIndex * 100}% )`);
}

function hideSlide() {
  // slides[slideIndex].classList.remove("view");
}

function changeSlide(dotsSlideIndex) {
  hideSlide();
  removeActiveClass();
  slideIndex = dotsSlideIndex;
  addActiveClass();
  showSlide();
  slider.style.animation = 'none';
  document.querySelectorAll(".slick-dots").forEach(dots => dots.style.display = "block");
}

function nextSlide() {
  // hideSlide();
  // removeActiveClass();
  // slideIndex++;
  let newSlideIndex = slideIndex + 1
  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
  // addActiveClass();
  // showSlide();
}

function previSlide() {
  // hideSlide();
  // removeActiveClass();
  // slideIndex--;
  let newSlideIndex = slideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }
  changeSlide(newSlideIndex);
  // addActiveClass();
  // showSlide();
}


addDots();
aroowRight.addEventListener("click", nextSlide);
aroowLeft.addEventListener("click", previSlide);

