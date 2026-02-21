import "./styles.css";
import barImg from "./images/barImg.jpg";
import loadHome from "./scripts/home.js";
import loadMenu from "./scripts/menu.js";
import { state, content } from "./shared.js";

// main content container
const container = document.querySelector(".container");
container.style.backgroundImage = `url(${barImg})`;

// selector and event listeners
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const bookBtn = document.querySelector(".book-btn");
const logoBtn = document.querySelector(".logo-btn");

logoBtn.addEventListener("click", () => {
  if (state.currentPage != "home") {
    loadHome();
  }
});

homeBtn.addEventListener("click", () => {
  if (state.currentPage != "home") {
    loadHome();
  }
});

menuBtn.addEventListener("click", () => {
  if (state.currentPage != "menu") {
    loadMenu();
  }
});

bookBtn.addEventListener("click", () => {
  if (currentPage != "book") {
    // loadBook();
  }
});

loadHome();