import "./styles.css";
import googleLogo from "./images/Google_Logo_1.png";
import michelinStar from "./images/MichelinStar.svg";
import locationPNG from "./images/location.png";
import barImg from "./images/barImg.jpg";
import coffeeImg from "./images/coffee.jpg";
import diningImg from "./images/fine-dining.jpg";
import wineImg from "./images/wine.jpg";
import cocktailImg from "./images/cocktail.jpg";

// variable 
let currentPage = "nothome";

// HOME PAGE ================================================================================================
// classes
class Review {
  name;
  imgURL;
  stars;
  constructor(name, imgURL, stars) {
    this.name = name;
    this.imgURL = imgURL;
    this.stars = stars;
  }
  set setImage(url) {
    this.imgURL = url;
  }
  set setStars(stars) {
    this.stars = stars;
  }
}

class Commendation {
    name;
    title;
    commendation;
    constructor(name, title, commendation) {
        this.name = name;
        this.title = title;
        this.commendation = commendation;
    }
}

class Location {
    mapURL;
    address;
    constructor(mapURL, address) {
        this.mapURL = mapURL;
        this.address = address;
    }
}

class Instructions {
    title;
    content;
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

class Contacts {
    address;
    number;
    socials;
    email;
    constructor(address, number, socials, email) {
        this.address = address;
        this.number = number;
        this.socials = socials;
        this.email = email;
    }
}

// reviews
function loadReview(arrReview) {
  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("review-container");

  for (let i = 0; i < arrReview.length; i++) {
    let currReview = arrReview[i];
    const div = document.createElement("div");
    div.classList.add("review");

    const img = document.createElement("img");
    img.src = currReview.imgURL;
    img.alt = currReview.name;

    const name = document.createElement("p");
    name.textContent = currReview.name;

    const stars = document.createElement("p");
    stars.textContent = "★".repeat(currReview.stars);

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(stars);
    reviewContainer.appendChild(div);
  }

  content.appendChild(reviewContainer);
}

function loadCommendation(arrCommendation) {
  const commendationContainer = document.createElement("div");
  commendationContainer.classList.add("commendation-container");

  for (let i = 0; i < arrCommendation.length; i++) {
    const div = document.createElement("div");
    div.classList.add("commendation");
    const block = document.createElement("blockquote");
    const para = document.createElement("p");
    para.textContent = "\" " + arrCommendation[i].commendation + " \"";
    const details = document.createElement("div");
    details.classList.add("details")
    const detailString = "~" + arrCommendation[i].name + ", " + arrCommendation[i].title;
    details.textContent = detailString;

    div.appendChild(block);
    block.appendChild(para);
    div.appendChild(details);
    commendationContainer.appendChild(div);
  }

  content.appendChild(commendationContainer);
}

// location
function loadLocationDetails(location) {
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("location-container");
  const img = document.createElement("img");
  img.classList.add("map");
  img.src = location.mapURL;

  const details = document.createElement("div");
  details.classList.add("details");
  const para = document.createElement("p");
  const string = "Address: " + location.address;
  para.textContent = string;

  locationContainer.appendChild(img);
  details.appendChild(para);
  locationContainer.appendChild(details);
  content.appendChild(locationContainer);
}

function loadInstructions(arrInstr) {
  const instructionContainer = document.createElement("div");
  instructionContainer.classList.add("instructions-container");
  for (let i = 0; i < arrInstr.length; i++) {
    const div = document.createElement("div");
    div.classList.add("instr");
    div.classList.add(`instr-${i}`);
    const title = document.createElement("p");
    title.classList.add("instr-title");
    title.textContent = arrInstr[i].title;
    const mainContent = document.createElement("p");
    mainContent.classList.add("instr-content");
    mainContent.textContent = arrInstr[i].content;

    div.appendChild(title);
    div.appendChild(mainContent);
    instructionContainer.appendChild(div);
  }
  content.appendChild(instructionContainer);
}

// load contacts
function loadContacts(contactData) {
    const contactsContainer = document.createElement("div");
    contactsContainer.classList.add("contacts-container");
    const left = document.createElement("div");
    const right = document.createElement("div");

    // left
    const logo = document.createElement("p");
    logo.classList.add("logo");
    logo.textContent = "The Tipsy Bar";
    const leftTitle = document.createElement("p");
    leftTitle.classList.add("contacts-title");
    leftTitle.textContent = "FIND US";
    const leftContent = document.createElement("p");
    leftContent.classList.add("left-content");
    const line1 = document.createElement("div");
    line1.textContent = contactData.address;
    const line2 = document.createElement("div");
    line2.textContent = contactData.number;
    const line3 = document.createElement("div");
    line3.textContent = contactData.socials;
    const line4 = document.createElement("div");
    line4.textContent = contactData.email;
    line1.classList.add("left-detail");
    line2.classList.add("left-detail");
    line3.classList.add("left-detail");
    line4.classList.add("left-detail");
    left.appendChild(logo);
    left.appendChild(leftTitle);
    leftContent.appendChild(line1);
    leftContent.appendChild(line2);
    leftContent.appendChild(line3);
    leftContent.appendChild(line4);
    left.appendChild(leftContent);

    // right
    const rightTitle = document.createElement("div");
    rightTitle.textContent = "DISCOVER The Tipsy Bar";
    rightTitle.classList.add("contacts-title");
    const rightContent = document.createElement("div");
    rightContent.classList.add("right-content");
    const line5 = document.createElement("div");
    line5.textContent = "Menu";
    const line6 = document.createElement("div");
    line6.textContent = "Book a table";
    const line7 = document.createElement("div");
    line7.textContent = "The Team";
    const line8 = document.createElement("div");
    line8.textContent = "Privacy Policy";
    const line9 = document.createElement("div");
    line9.textContent = "We're always happy to hear from like-minded people, and our team is often growing. We value attention to detail, purposeful hospitality, and a true, deep love of hosting. Email us!";
    line5.classList.add("right-detail");
    line6.classList.add("right-detail");
    line7.classList.add("right-detail");
    line8.classList.add("right-detail");
    line9.classList.add("right-detail");
    rightContent.appendChild(line6);
    rightContent.appendChild(line7);
    rightContent.appendChild(line8);
    rightContent.appendChild(line9);
    right.appendChild(rightTitle);
    right.appendChild(rightContent);

    contactsContainer.appendChild(left);
    contactsContainer.appendChild(right);
    content.appendChild(contactsContainer);
}

// load HOME page
function loadHome() {
  content.innerHTML = "";
  currentPage = "home";
  
  // load review
  const arrReview = [];
  const google = new Review("Google", googleLogo, 5);
  const michelin = new Review("Michelin Guide", michelinStar, 1);
  arrReview.push(google);
  arrReview.push(michelin);
  loadReview(arrReview);

  // load commendation
  const arrCommendation = [];
  const xn = new Commendation(
    "XN",
    "CEO, XN's Paradise",
    "I had an absolutely wonderful experience dining here. From the moment I walked in, the atmosphere was warm and inviting, and the staff made me feel genuinely welcome. The food was beautifully presented and bursting with flavor—clearly prepared with care and high-quality ingredients. Every detail, from the attentive service to the perfectly balanced dishes, reflected a true passion for hospitality. I highly recommend this restaurant to anyone looking for an exceptional dining experience, and I cannot wait to return.",
  );
  const xz = new Commendation(
    "CNN",
    "Food Critic 1",
    "Fantastic food, welcoming atmosphere, and truly attentive service. Every dish was flavorful and beautifully prepared. A great place to enjoy a memorable meal—I’ll definitely be back!",
  );
  arrCommendation.push(xn);
  arrCommendation.push(xz);
  loadCommendation(arrCommendation);

  // load location
  const loc = new Location(
    locationPNG,
    "1 Bayfront Avenue, Hotel, Tower 3 Marina Bay Sands, 018971",
  );
  loadLocationDetails(loc);

  //load instructions
  const arrInstr = [];
  const instr_1 = new Instructions(
    "The Day Begins",
    "Awaken your senses with artisan coffee, delicate pastries, and beautifully prepared breakfast dishes inspired by fresh, local ingredients.",
  );

  const instr_2 = new Instructions(
    "Midday Delights",
    "Enjoy a thoughtfully curated lunch experience featuring seasonal flavors, vibrant plates, and satisfying favorites reimagined.",
  );

  const instr_3 = new Instructions(
    "Evening ChillOut",
    "Settle into the evening with refined entrées, signature cocktails, and an inviting ambiance perfect for savoring every moment.",
  );
  arrInstr.push(instr_1);
  arrInstr.push(instr_2);
  arrInstr.push(instr_3);
  loadInstructions(arrInstr);

  // contacts;
  const contacts = new Contacts(
    "1 Bayfront Avenue, Hotel, Tower 3 Marina Bay Sands, 018971",
    "(+65) 98761234",
    "Instagram: @TheTipsyBar",
    "TheTipsyBar@gmail.com",
  );
  loadContacts(contacts);
}  
// HOME PAGE ================================================================================================

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
  currentPage = "menu"
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


// BOOK PAGE ================================================================================================




// BOOK PAGE ================================================================================================




// main content container
const content = document.querySelector("#content");
const container = document.querySelector(".container");
container.style.backgroundImage = `url(${barImg})`;

// selector and event listeners
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const bookBtn = document.querySelector(".book-btn");
const logoBtn = document.querySelector(".logo-btn");

logoBtn.addEventListener("click", () => {
  if (currentPage != "home") {
    loadHome();
  }
});

homeBtn.addEventListener("click", () => {
  if (currentPage != "home") {
    loadHome();
  }
});

menuBtn.addEventListener("click", () => {
  if (currentPage != "menu") {
    loadMenu();
  }
});

bookBtn.addEventListener("click", () => {
  if (currentPage != "book") {
    // loadBook();
  }
});

loadHome();