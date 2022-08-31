'use strict';

// global varriables

let goatContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let clicks = 0;
let maxClicksAllowed = 9;
let uniqueImageCount = 4;
let indexArray = [];

// functional logic

function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
  Goat.allGoatsArray.push(this);
}

Goat.allGoatsArray = [];

function getRandomNumber() {
  return Math.floor(Math.random() * Goat.allGoatsArray.length);
}

function renderGoats() {
  
  while (indexArray.length < uniqueImageCount) {
    let randomNumber = getRandomNumber();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    }
  }
  /* refer to goat-array-includes.png in the facilitator/whiteboard-diagrams folder for a visualization of this */
  console.log(indexArray);

  let goat1 = indexArray.shift();
  let goat2 = indexArray.shift();
  image1.src = Goat.allGoatsArray[goat1].src;
  image2.src = Goat.allGoatsArray[goat2].src;
  image1.alt = Goat.allGoatsArray[goat1].name;
  image2.alt = Goat.allGoatsArray[goat2].name;
  Goat.allGoatsArray[goat1].views++;
  Goat.allGoatsArray[goat2].views++;
}

goatContainer.addEventListener("click", handleGoatClick);

function handleGoatClick(event) {
  if (event.target === goatContainer) {
    alert("Please click on an image");
  }
  clicks++;
  let clickGoat = event.target.alt;
  for (let i = 0; i < Goat.allGoatsArray.length; i++) {
    if (clickGoat === Goat.allGoatsArray[i].name) {
      Goat.allGoatsArray[i].clicks++;
      break;
    }
  }

  if (clicks === maxClicksAllowed) {
    goatContainer.removeEventListener("click", handleGoatClick);
    goatContainer.className = "no-voting";
    renderChart();
  } else {
    renderGoats();
  }
}

function renderChart() {
  const ctx = document.getElementById("myChart").getContext("2d");
  if (!ctx) {
    return;
  }

  const labels = []; // Fill with `name` of each goat
  const viewsDataset = {
    label: "Times shown",
    data: [], // Fill with views
    backgroundColor: ["rgba(255, 0, 0, 0.8)"],
  };
  const clicksDataset = {
    label: "Times voted",
    data: [], // Fill with clicks
    backgroundColor: ["rgba(0, 0, 255, 0.8)"],
  };

  // Loop all goats, get the properties, put them in the places
  for (let i = 0; i < Goat.allGoatsArray.length; i++) {
    let goat = Goat.allGoatsArray[i];

    labels[i] = goat.name;
    viewsDataset.data[i] = goat.views;
    clicksDataset.data[i] = goat.clicks;
  }

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels, // product names
      datasets: [
        viewsDataset, // Dataset for number of clicks
        clicksDataset, // Dataset for number of clicks
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  console.log(myChart);
}

// executable code

new Goat("Cruising Goat", "./images/cruisin-goat.jpg");
new Goat("Float Your Goat", "./images/float-your-goat.jpg");
new Goat("Goat Out of Hand", "./images/goat-out-of-hand.jpg");
new Goat("Kissing Goat", "./images/kissing-goat.jpg");
new Goat("Sassy Goat", "./images/sassy-goat.jpg");
new Goat("Smiling Goat", "./images/smiling-goat.jpg");
new Goat("Sweater Goat", "./images/sweater-goat.jpg");

renderGoats();

