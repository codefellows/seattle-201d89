'use strict';

let person = {
  name: 'Jacob',
  age: 31,
  hobbies: ['skateboarding', 'video games'],
  greet: function (name) { // functions assigned to object values are called methods
    console.log(`Hello ${name}!!`);
  },
  // contextual 'this' keyword
  sayName: function () {
    // in a method 'this' refers to the object that the method is attached to.
    console.log('My name is ' + this.name);
  }
};

let key = 'name';
// bracket notation, lets us use expressions to read values.
console.log(person[key]); // reading the value, stored at the key: 'name'
console.log(person.name); // dot notation for reading object values.

let people = [person];

// console.log(people[0], person['hobbies'][0]);

person.greet('class');
person.sayName();

// define and object, that has a key value pair, the key is 'hobbies', the value is an array of strings.

// define a method on your object, that can log each string (not the array) within the hobbies array, call your method.

let object = {
  hobbies: ['skateboarding', 'video games', 'programming', 'cooking'],
  logHobbies: function () {
    for (let hobby of this.hobbies) {
      console.log(hobby);
    }
  }
};

// object.logHobbies();

// console.log(document.body.innerHTML);

// READ an element using an id
let titleEl = document.getElementById('title');
// let alsoTitle = document.querySelector('#title');
// console.log(titleEl);

// UPDATE a property on an element
titleEl.textContent = 'Youve been hacked!';

let cardEl = document.getElementById('card');
console.log(cardEl);

// CREATE a new HTML element
let textEl = document.createElement('p');
textEl.textContent = 'Here is my paragraph';

// our JS element gets added to the document
cardEl.appendChild(textEl);


// Generating random numbers
function generateRandomNumber(highValue) {
  return Math.floor(Math.random() * (highValue + 1));
}

function generateBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

// console.log(generateRandomNumber(20));
console.log(generateBetween(5, 20));
