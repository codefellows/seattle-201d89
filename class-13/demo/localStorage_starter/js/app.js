"use strict";

// We _want_ the data to persist on reload (or close and reopen)
//   1. Store the orders when they're made
//   2. Load (retrieve) orders when the page first loads

// target our order form from the html
const orderForm = document.getElementById("orderForm");
const orders = document.getElementById("orders");

// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType) {
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);

  //  -- 1. Store the orders when they're made --
}

// set the global array to empty
Coffee.drinks = [];

//   2. Load (retrieve) orders & display them
let maybeStored = localStorage.getItem("toStore");
if (maybeStored) {
  Coffee.drinks = JSON.parse(maybeStored);
}

// event handler function to run everytime the form is submitted
function handleSubmit(event) {
  event.preventDefault();
  // console.log(event.target);

  // get all the values from the form
  const drink = event.target;
  const name = drink.name.value;
  const size = drink.size.value;
  const dType = drink.drinkType.value;
  const milk = drink.milk.value;
  const isHot = drink.isHot.checked;

  new Coffee(name, size, milk, isHot, dType);

  //  ?? 1. Store the orders when they're made
  // What do we store in local storage?
  let toStore = Coffee.drinks;
  console.log(toStore);
  // How to store a thing in local storage?
  localStorage.setItem("toStore", JSON.stringify(toStore));

  // update the previous orders with the new order
  renderOrders();
}

function renderOrders() {
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";

  // go through the array and output the details of each drink in the array
  for (let i = 0; i < Coffee.drinks.length; i++) {
    const drinkLI = document.createElement("li");
    const infoP = document.createElement("p");
    let temp;
    if (Coffee.drinks[i].isHot) {
      temp = "hot";
    } else {
      temp = "cold";
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}

// Add an event listener to the submit button
orderForm.addEventListener("submit", handleSubmit);
//   --2. Load (retrieve) orders & display them--

renderOrders();
