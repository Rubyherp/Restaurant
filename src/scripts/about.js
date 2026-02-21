import { content, state } from "../shared.js";

function loadAbout() {
  content.innerHTML = "";
  state.currentPage = "about";
  const aboutContainer = document.createElement("div")
  aboutContainer.classList.add("about-container");

  const header = document.createElement("div");
  header.classList.add("about-header");
  const title = document.createElement("div");
  title.classList.add("about-header-title");
  const subheader = document.createElement("div");
  subheader.classList.add("about-header-subheader");

  title.textContent = "Our Story";
  subheader.textContent = "Beyond Dining, Into Splendor";
  header.appendChild(title);
  header.appendChild(subheader);

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  para1.textContent =
    "At the heart of our journey lies a pursuit of perfection—where every ingredient, every detail, and every moment is crafted to transcend ordinary dining. From the first spark of inspiration to the last flourish on your plate, we have dedicated ourselves to creating an experience that is as timeless as it is extraordinary.";
  para2.textContent =
    "We believe that dining is more than nourishment—it is a celebration of artistry, passion, and the extraordinary pleasures of life. Here, tradition meets innovation, and elegance is found in every nuance. Every visit is an invitation to indulge, to savor, and to discover a world where culinary mastery meets unparalleled luxury.";
    aboutContent.appendChild(para1);
    aboutContent.appendChild(para2);

  aboutContainer.appendChild(header);
  aboutContainer.appendChild(aboutContent);
  content.appendChild(aboutContainer);
}

export default loadAbout;