'use strict';

let pokedex = [];

function Pokemon(name, health, attack, type) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.type = type;
}

Pokemon.prototype.speak = function () {
  console.log(this.name.toUpperCase() + '!!!!');
};
Pokemon.prototype.evolve = function (name) {
  this.name = name;
};

function catchPokemon (data) {
  pokedex.push(new Pokemon(data.name, data.health, data.attack, data.type));
}

catchPokemon({
  name: 'Pikachu',
  health: 100,
  attack: 12,
  type: 'Electric',
});
catchPokemon({
  name: 'Charizard',
  health: 120,
  attack: 20,
  type: 'Fire',
});
catchPokemon({
  name: 'Bulbasaur',
  health: 80,
  attack: 12,
  type: 'Grass',
});

console.log(pokedex);
// let keysToRender = ['name', 'health', 'attack', 'type'];
let tableBody = document.getElementById('table-body');

for (let pokemon of pokedex) {
  pokemon.speak();

  let row = document.createElement('tr');

  for (let key in pokemon) {
    let value = pokemon[key];
    if (key !== 'evolve' && key !== 'speak') {
      let cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    }
  }
  tableBody.appendChild(row);
}
