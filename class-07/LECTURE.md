# Class 07 - Constructor Functions & HTML Tables

## Code Review

Ben - Using appendChild function
 - One "Node" needs another "Node".
Jacob - Calculating hourly Sales totals using minimum / maximum Customers per hour, and the average cookies per Customer.

Object - single data thing, contains values organized by "key". Key is how to find the value.  Any thing value.
Constructor Functions - something (function) that produces objects => storage containers for key value pairs.
Prototype - Separate Object that tells what other objects from the constructor will share.


Thanks Diego for sharing your Code!

## JS Fundamentals: Constructor Functions

Object => storage containers for key value paris.  Constructor function are functions that create objects.  The function defines the shape (the properties on the object).  The parameters represent the values.

```javascript

// Defined as a function with a capital letter (by convention)
function Pokemon(name, health, abilities) { // pass in any values that are not the same between objects created.
  // this represents the object that will be produced.
  this.name = name;
  this.health = health;
  this.abilities = abilities;
}

// the prototype is an object shared by all objects that are produced from the constructor.
// think of this as a "blueprint" shared by all constructed objects.
Pokemon.prototype.attack = 100;
Pokemon.prototype.speak = function() {
  console.log(this.name + '!!!!!');
}

// the "new" keyword activates constructor function powers
let pokemon = new Pokemon('Jacob', 100, ['teaching']); // {name: 'Jacob'}
pokemon.speak(); // Jacob!!!!!!
```

## HTML Tables

## DEMO: Creating Tables using the DOM
