"use strict";
// SELECTIONS...
const header = document.querySelector("header");
const numberInp = document.querySelector(".number-input");
const sidebar = document.querySelector(".sidebar");
const sidebarList = document.querySelector(".sidebar-list");
const sidebarDownloadContainer = document.querySelector(
  ".sidebar-download-container"
);
const sidebarDownloadList = document.querySelector(".sidebar-download-list");
const barsBtn = document.querySelector(".bars-icon");
const timesBtn = document.querySelector(".times-icon");
const sidebarDownloadText = document.querySelector(".snap-sidebar-download");
const sidebarIcon = document.querySelectorAll(".sidebar-download-section-icon");
const chevronDown = document.querySelector(".fa-chevron-down");
const chevronUp = document.querySelector(".fa-chevron-up");
let slides = document.querySelectorAll(".mySlides");
export let dots = document.querySelectorAll(".dot");
const dotContainer = document.querySelector(".dot-container");
const defaultBtn = document.querySelector(".default-btn");
const clearBtn = document.querySelector(".times-btn");
// STATE VARIABLES...
let clicked = false;
export let dotNumber;
// FUNCTIONS...
const sidebarHandler = function (marginR, marginT, barsDis, timesDis) {
  sidebar.style.marginRight = marginR;
  sidebar.style.marginTop = marginT;
  barsBtn.style.display = barsDis;
  timesBtn.style.display = timesDis;
};
//prettier-ignore
const sidebarListHandler = function (marginT, sidebarD, chevronDD, chevronUD,height) {
  sidebarDownloadList.style.marginTop = marginT;
  sidebarDownloadList.style.display = sidebarD;
  chevronDown.style.display = chevronDD;
  chevronUp.style.display = chevronUD;
  sidebarDownloadContainer.style.height = height;
};

// Number input handler
const numberInputHandler = function (defDis, clearDis) {
  defaultBtn.style.display = defDis;
  clearBtn.style.display = clearDis;
};

//EVENT HANDLERS...
barsBtn.addEventListener("click", function () {
  sidebarHandler("0", "0", "none", "block");
});

timesBtn.addEventListener("click", function () {
  sidebarHandler("-770px", "-395px", "block", "none");
});

sidebarDownloadText.addEventListener("click", function () {
  if (clicked) {
    clicked = false;
    return sidebarListHandler("-218px", "none", "block", "none", "40px");
  }
  sidebarListHandler("0", "flex", "none", "block", "240px");

  clicked = true;
});

// slide
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const slideHandler = function (e) {
  if (!Array.from(e.target.classList).includes("dot")) return;
  dots.forEach((dot) => dot.classList.remove("active"));
  const currentDot = e.target;
  currentDot.classList.add("active");
  dotNumber = +e.target.dataset.number;
  //handling the display of all slides except for the slide that matches the dot number
  slides.forEach((slide) => {
    if (Array.from(slide.classList)[0] === `slide-${dotNumber}`) return;
    slide.style.display = "none";
    document.querySelector(`.slide-${dotNumber}`).style.display = "block";
  });
};

dotContainer.addEventListener("click", function (e) {
  slideHandler(e);
});
// the input number event handling...
numberInp.addEventListener("input", function () {
  numberInputHandler("none", "block");
  if (numberInp.value.length >= 1) return;
  numberInputHandler("block", "none");
});

clearBtn.addEventListener("click", function () {
  numberInp.value = "";
  numberInputHandler("block", "none");
});
