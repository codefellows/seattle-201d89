# Class 08 - Prototypal Inheritance / CSS Layouts (Flex Box and Wireframing)

## Code Review

* Potential is there, but it feels like it's propped up by "magic"
* Taking a long to do a little.
* Javascript allows really weird mistakes.

Yesterday:

* Refactor objects literals into constructor function invocation.
* Add a method / or function to display our table.
  * Getting the grand total column.
  * Footer row - sales across all stores at a given our.

## Prototypal Inheritance

Yesterday we started to use prototypes:

* Template for our objects.
* Things that similar objects share.

  Prototypes can be inherited by other constructors

```javascript

function Animal(type, gender) {
  this.type = type;
  this.gender = gender;
}

Animal.prototype.feet = 4;
Animal.prototype.eyes = true;

let toby = new Animal('Dog', 'male');
console.log(toby);


function Human(name, gender) {
  this.name = name;
  // uses the animal constructor to create an animal object, which will extend the Human object
  Animal.call(this, 'Human', gender);
}

// Since JS passes objects by reference when assigned to a variables, we use Object.create to make a copy of the prototype.
Human.prototype = Object.create(Animal.prototype);
Human.prototype.feet = 2;

let jacob = new Human('Jacob', 'male');
console.log(jacob);

```

## CSS Layouts

Responsive layouts are layouts that change with screen size:

* The size our content (Pixels / percentages / width and height / box model)
* How does our content behave around parents and siblings.
  * Absolute - position something according to it's parent.
  * Fixed - ignore parents and children, only position according to the view window.
  * Relative - position and element relative to parents and siblings.
* display: how much space to I give to siblings.
* block: Take up as much width space as possible. Content will take up the width of it's parent.
* inline-block:  Similar to block, but it won't disallow other elements from sitting right next to it.
* inline: Elements will flow wherever they can fit, you cannot set height and width.  When you need something to take up as little space.

### Flex Box

* flex: Is set on a container elements, and tells that element how to layout it's children.

### Wireframing
