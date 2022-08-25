'use strict';

let formEl = document.getElementById('pokemon-form');

// this is something that needs to be managed because it changes as the user interacts with our webpage.
let pokedex = [];

function Pokemon(name, type, health, img = 'https://via.placeholder.com/50') {
  this.name = name;
  this.type = type;
  this.health = health;
  this.img = img;
}

Pokemon.prototype.speak = function() {
  console.log(this.name.toUpperCase() + '!!!!');
};

Pokemon.prototype.display = function() {
  // read the target element (where am I adding elements)
  let pokedexEl = document.getElementById('pokedex');

  // create a new element
  let itemEl = document.createElement('li');

  // update new element with values
  itemEl.textContent = `Name - ${this.name}, Type - ${this.type}, Health - ${this.health}`;

  // append new element to the document.
  pokedexEl.appendChild(itemEl);
};

formEl.addEventListener('submit', function(event) {
  event.preventDefault(); // use this to prevent that page refresh
  console.log(event); // this is the event API, The browser is responsible for creating this object.
  console.log(event.target); // the element that triggered the event.
  console.log(event.target.pokemon_name);
  console.log(event.target.pokemon_type);
  console.log(event.target.pokemon_health);

  // destructuring an object using its properties
  let { pokemon_name, pokemon_type, pokemon_health } = event.target;
  let pokemon = new Pokemon(
    pokemon_name.value,
    pokemon_type.value,
    pokemon_health.value
  );

  pokedex.push(pokemon);
  console.log(pokedex);

  let pokedexEl = document.getElementById('pokedex');
  pokedexEl.innerHTML = ''; // reset the list to an empty list.
  for (let pokemon of pokedex) {
    pokemon.display();
  }
});

function renderPokedex() {

}

function handleSubmit(event) {

}

function addPokemon(name, health, type) {}
