'use strict'; // strict syntax

console.log('app is running');

let user = prompt('What is you name?');
console.log(user);
if (user === null) {
  alert('You need to provide your name');
  user = prompt('No really what is your name?');
}

let color = prompt('What is your favorite color?');

switch (color) {
case 'red':
  alert('I like red');
  break;
case 'blue':
  alert('blue is great too');
  break;
case 'yellow':
  alert('yellow is just okay');
  break;
default:
  alert('Oh interesting, I don\'t know that color');
}

// creates a variables and asks the user to give it a value.
let movie = prompt('What is one of my favorite action movies?'); // String data type
if (typeof(movie) === 'string') {
  movie = movie.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (movie === 'con air') {
  alert('That is a great Movie!');
} else if (movie === 'the rock') {
  alert('Another great Movie');
} else if (movie === 'face off') {
  alert('One of my faves!');
} else {
  alert('I don\'t know that movie!');
}
