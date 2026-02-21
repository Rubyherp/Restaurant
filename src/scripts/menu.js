import coffeeImg from "../images/coffee.jpg";
import diningImg from "../images/fine-dining.jpg";
import wineImg from "../images/wine.jpg";
import cocktailImg from "../images/cocktail.jpg";
import { content, state } from "../shared.js";
// MENU PAGE ================================================================================================

// class
class Category {
  name;
  time;
  imageURL;
  description;
  menuURL;

  constructor(name, time, imageURL, description, menuURL) {
    this.name = name;
    this.time = time;
    this.imageURL = imageURL;
    this.description = description;
    this.menuURL = menuURL;
  }

}

function loadMenu() {
  content.innerHTML = "";
  state.currentPage = "menu"
  // variables;
  let arrMenu = [];

  // categories
  // not yet add image URl
  const coffee = new Category(
    "Coffee",
    "10:00",
    coffeeImg,
    "Start your day with our speciality coffee. Smooth, expressive, and crafted with a precise blend of powerful coffee beans and savoury milk",
    "coffee menu",
  );
  const meal = new Category(
    "Finest Dining",
    "14:00",
    diningImg,
    "Indulge in our finest dining experience, where seasonal ingredients meet culinary artistry. Each dish is thoughtfully crafted to deliver bold flavors, elegant presentation, and a truly memorable gastronomic journey.",
    "meal menu",
  );
  const wine = new Category(
    "Fine Wines",
    "17:00",
    wineImg,
    "Explore our curated selection of fine wines, featuring elegant reds, crisp whites, and sparkling varieties sourced from renowned vineyards. Each bottle is chosen to perfectly complement your dining experience and elevate every occasion.",
    "wine menu",
  );
  const cocktail = new Category(
    "Signature Cocktails",
    "20:00",
    cocktailImg,
    "Discover our handcrafted signature cocktails, expertly mixed with premium spirits, fresh ingredients, and creative flair. From timeless classics to bold house creations, each drink is designed to delight and impress.",
    "cocktail menu",
  );

  arrMenu.push(coffee);
  arrMenu.push(meal);
  arrMenu.push(wine);
  arrMenu.push(cocktail);

  const pageContainer = document.createElement("div");
  pageContainer.classList.add("page-container");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // header
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");
  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "The Tipsy Bar";
  const subheader = document.createElement("div");
  subheader.classList.add("subheader");
  subheader.textContent = "Since 1978";
  const motto = document.createElement("div");
  motto.classList.add("subheader");
  motto.textContent = "Indulge - Savor - Ascend"

  headerContainer.appendChild(header);
  headerContainer.appendChild(subheader);
  headerContainer.appendChild(motto);
  pageContainer.appendChild(headerContainer);

  // stopped here tbc
  for (let i = 0; i < arrMenu.length; i++) {
    const item = arrMenu[i];
    const main = document.createElement("div");
    main.classList.add("main");
    main.classList.add(`main-${i}`);
    const img = document.createElement("img");
    img.src = item.imageURL;
    const detail = document.createElement("div");
    detail.classList.add("category-detail")
    
    const name = document.createElement("p");
    name.textContent = item.name;
    name.classList.add("detail-name")
    const time = document.createElement("p");
    time.textContent = item.time;
    time.classList.add("detail-time")
    const description = document.createElement("p");
    description.textContent = item.description;
    description.classList.add("detail-description")
    const menuLink = document.createElement("a");
    menuLink.textContent = "view our " + item.menuURL;
    menuLink.classList.add("detail-menuLink")

    detail.appendChild(name);
    detail.appendChild(time);
    detail.appendChild(description);
    detail.appendChild(menuLink);
    
    if (i % 2 == 0) {
      main.appendChild(img);
      main.appendChild(detail);
    } else {
      main.appendChild(detail);
      main.appendChild(img);
    }
    const str = `main-${i}`;
    main.classList.add(str);
    menuContainer.appendChild(main);
  }
  pageContainer.appendChild(menuContainer);
  content.appendChild(pageContainer);
}



// MENU PAGE ================================================================================================

export default loadMenu;