"use strict";
import { dots } from "./script.js";
//SELECTION
const slides = document.querySelectorAll(".mySlides");
// slides Calling
let slideIndex = 0;
showSlides();
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  let currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";
  let slideNumber = Array.from(currentSlide.classList)[0].slice(6);
  dots.forEach((dot) => {
    if (dot.classList.contains("active")) dot.classList.remove("active");
  });
  document
    .querySelector(`[data-number="${slideNumber}"]`)
    .classList.add("active");
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
