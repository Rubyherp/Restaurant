import "./styles.css";
import googleLogo from "./images/Google_Logo_1.png";
import michelinStar from "./images/MichelinStar.svg";
import locationPNG from "./images/location.png";

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
    const detailString = "~" + arrCommendation[i].name + " " + arrCommendation[i].title;
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
    img.src = location.imgURL;
    
    // const details = document.createElement("")
}

// main content container
const content = document.querySelector("#content");

// load review
const arrReview = [];
const google = new Review("Google", googleLogo, 5);
const michelin = new Review("Michelin Guide", michelinStar, 1);
arrReview.push(google);
arrReview.push(michelin);
loadReview(arrReview);

// load commendation
const arrCommendation = [];
const xn = new Commendation("Xiang Neng", "CEO, XN's Paradise", "I had an absolutely wonderful experience dining here. From the moment I walked in, the atmosphere was warm and inviting, and the staff made me feel genuinely welcome. The food was beautifully presented and bursting with flavor—clearly prepared with care and high-quality ingredients. Every detail, from the attentive service to the perfectly balanced dishes, reflected a true passion for hospitality. I highly recommend this restaurant to anyone looking for an exceptional dining experience, and I cannot wait to return.")
const xz = new Commendation("xz", "Attorney General, Department of Justice", "Fantastic food, welcoming atmosphere, and truly attentive service. Every dish was flavorful and beautifully prepared. A great place to enjoy a memorable meal—I’ll definitely be back!")
arrCommendation.push(xn);
arrCommendation.push(xz);
loadCommendation(arrCommendation);

// load location
const loc = new Location(locationPNG, "1 Bayfront Avenue, Hotel, Tower 3 Marina Bay Sands, 018971");
loadLocationDetails(loc);