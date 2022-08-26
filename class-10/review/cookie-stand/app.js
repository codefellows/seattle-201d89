'use strict';

let allStores = [];
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, minCustPerHour, maxCustPerHour, avgCookiePerCust) {
  console.log("Values passed into constructor", name, minCustPerHour, maxCustPerHour, avgCookiePerCust);
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
  this.display();
  allStores.push(this);
}

Store.prototype.generateRandomCustomers = function () {
  let number = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  console.log('Generated customer values: ', this.maxCustPerHour, this.minCustPerHour, number);
  return number;
};

Store.prototype.generateCookiePerHour = function () {
  for (let i = 0; i < storeHours.length; i++) {
    let custPerHour = this.generateRandomCustomers();
    let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
    this.cookiesPerHour.push(amountCookiesSold); //push into array
    this.totalDailyCookies += amountCookiesSold;
    //console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
    //console.log(this.cookiesPerHour);
  }
};

Store.prototype.display = function () {
  this.generateCookiePerHour();
  let tableBody = document.getElementById('mainInfo');
  let tr = document.createElement('tr');
  tableBody.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = this.totalDailyCookies;
  tr.appendChild(td);
};

let hoursRow = function () {
  let thead = document.getElementById('hoursRow');

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('th');
    td.textContent = storeHours[i];
    tr.appendChild(td);
  }
  let td = document.createElement('th');
  td.textContent = ('Daily Total Sales');
  tr.appendChild(td);
};

let totalsRow = function () {
  let tableBody = document.getElementById('totalsRow');
  let row = document.createElement('tr');
  let head = document.createElement('th');
  head.textContent = 'Total Hourly Sales';
  row.appendChild(head);
  tableBody.appendChild(row);

  // outer loop through hours
  for (let hour in storeHours) {
    let salesAtHour = 0;
    let cell = document.createElement('td');
    //inner loop through stores
    for (let store in allStores) {
      let currentStore = allStores[store];
      let currentSales = currentStore.cookiesPerHour[hour];
      salesAtHour += currentSales;

    }
    cell.textContent = salesAtHour;
    row.appendChild(cell);
  }
  // now add the grandTotal
  let cell = document.createElement('th');
  let grandTotals = 0;
  for (let store of allStores) {
    grandTotals += store.totalDailyCookies;

  }
  cell.textContent = grandTotals;
  row.appendChild(cell);
};

hoursRow();
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
totalsRow();

let cookieForm = document.getElementById('cookies-form');

cookieForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let newLocation = event.target.location.value;
  // convert our string numerical inputs to Numbers.
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgCookies = parseInt(event.target.avgCookies.value);
  console.log("Form values on Submit", newLocation, minCust, maxCust, avgCookies);
  new Store(newLocation, minCust, maxCust, avgCookies);

  console.log('form submitted');
  document.getElementById('totalsRow').textContent = '';
  totalsRow();
  document.getElementById('cookies-form').reset();
});


/*
Store.prototype.display = function () {
  this.generateCookiePerHour();
  let displaySeattle = document.getElementById(this.name);
  for (let i = 0; i < storeHours.length; i++) {
    let entry = document.createElement('li');
    entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    displaySeattle.appendChild(entry);

  }
  let total = document.createElement('li');
  total.textContent = `Total: ${this.totalDailyCookies} cookies`;
  displaySeattle.appendChild(total);
};

*/





/* 

let seattle = {
  name: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      //console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      //console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displaySeattle = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displaySeattle.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displaySeattle.appendChild(total);
  }
};


let tokyo = {
  name: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiePerCust: 1.2,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displayTokyo = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayTokyo.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayTokyo.appendChild(total);
  }
};


let dubai = {
  name: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiePerCust: 3.7,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displayDubai = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayDubai.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayDubai.appendChild(total);
  }
};


let paris = {
  name: 'Paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiePerCust: 2.3,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displayParis = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayParis.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayParis.appendChild(total);
  }
};


let lima = {
  name: 'Lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerCust: 4.6,
  cookiesPerHour: [],
  totalDailyCookies: 0,

  generateRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
  },

  generateCookiePerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let custPerHour = this.generateRandomCustomers();
      let amountCookiesSold = Math.ceil(custPerHour * this.avgCookiePerCust);
      this.cookiesPerHour.push(amountCookiesSold); //push into array
      this.totalDailyCookies += amountCookiesSold;
      console.log(`The ${this.name} store had ${custPerHour} customers during this hour and sold a total of ${amountCookiesSold} cookies.`);
      console.log(this.cookiesPerHour);
    }
  },

  display: function () {
    this.generateCookiePerHour();
    let displayLima = document.getElementById(this.name);
    for (let i = 0; i < storeHours.length; i++) {
      let entry = document.createElement('li');
      entry.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      displayLima.appendChild(entry);

    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalDailyCookies} cookies`;
    displayLima.appendChild(total);
  }
};

seattle.display();
tokyo.display();
dubai.display();
paris.display();
lima.display();


*/


/* Class Notes

//Generating random numbers

function generateRandomNumber(highValue) {
  return Math.floor(Math.random() * highValue);
}

function generateBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;


}

// console.log(generateRandomNumber(20));

console.log(generateBetween(5, 20));

*/

