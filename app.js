"use strict";

// Global variable setting

const header = document.querySelector(".header");
const toggleButton = document.querySelector(".toggle-button");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const brand = document.querySelector(".navbar-brand");
const navbar = document.querySelector(".navbar");
const cardImg1 = document.querySelector(".card-img-1");
const previousSlide = document.querySelector(".previous-slide");
const nextSlide = document.querySelector(".next-slide");

// Default settings

closeMenu.classList.add("hidden");

// Navbar functionality

toggleButton.addEventListener("click", () => {
  if (navbar.classList.toggle("active")) {
    header.classList.toggle("active");
    brand.classList.add("hidden");
    openMenu.classList.add("hidden");
    closeMenu.classList.remove("hidden");
  } else {
    header.classList.remove("active");
    brand.classList.remove("hidden");
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
  }
});

// Navbar bug prevent in case its left open and resized

function navbarBehavior() {
  if (window.innerWidth >= 750) {
    header.classList.remove("active");
    brand.classList.remove("hidden");
    navbar.classList.remove("hidden");
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
  } else {
    header.classList.remove("active");
    brand.classList.remove("hidden");
    navbar.classList.remove("active");
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
  }
}

// Changing image between desktop/mobile based on screen width

function mobileImages() {
  if (window.innerWidth <= 750) {
    cardImg1.setAttribute("src", "images/mobile-image-hero-1.jpg");
  } else if (window.innerWidth >= 750) {
    cardImg1.setAttribute("src", "images/desktop-image-hero-1.jpg");
  }
}

// Navbar & Mobile image on screen size change

window.addEventListener("DOMContentLoaded", mobileImages);
window.addEventListener("resize", mobileImages);
window.addEventListener("DOMContentLoaded", navbarBehavior);
window.addEventListener("resize", navbarBehavior);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navbarBehavior();
  }
});

// Changing images with next & previous // Dynamic changing
//  In case we get more images, all we have to do is increase images number
//  and add them to our images folder.

let images = 3;
let counter = 0;

nextSlide.addEventListener("click", () => {
  counter = (counter + 1) % images;
  if (window.innerWidth <= 750) {
    cardImg1.setAttribute("src", `images/mobile-image-hero-${counter + 1}.jpg`);
  } else {
    cardImg1.setAttribute(
      "src",
      `images/desktop-image-hero-${counter + 1}.jpg`
    );
  }
});

previousSlide.addEventListener("click", () => {
  counter = (counter - 1 + images) % images;
  if (window.innerWidth <= 750) {
    cardImg1.setAttribute("src", `images/mobile-image-hero-${counter + 1}.jpg`);
  } else {
    cardImg1.setAttribute(
      "src",
      `images/desktop-image-hero-${counter + 1}.jpg`
    );
  }
});

// This is the best I could come up with, for now.

//
// let images = 3;
// let counter = 1;

// nextSlide.addEventListener("click", () => {
//   if (window.innerWidth <= 750 && images > counter) {
//     counter++;
//     cardImg1.setAttribute("src", `images/mobile-image-hero-${counter}.jpg`);
//   } else if (window.innerWidth >= 750 && images > counter) {
//     counter++;
//     cardImg1.setAttribute("src", `images/desktop-image-hero-${counter}.jpg`);
//   } else {
//     counter = 0;
//   }
// });
// //

// previousSlide.addEventListener("click", () => {
//   if (window.innerWidth <= 750 && images > counter) {
//     counter++;
//     cardImg1.setAttribute("src", `images/mobile-image-hero-${counter}.jpg`);
//   } else if (window.innerWidth >= 750 && images > counter) {
//     counter++;
//     cardImg1.setAttribute("src", `images/desktop-image-hero-${counter}.jpg`);
//   } else {
//     counter = 0;
//   }
// });
