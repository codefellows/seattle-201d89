# Class 04 - JS Functions / CSS positioning / Pair Programming

## Code Review

* Question 6
* Question 7

## CSS Positioning

CSS layouts are not only dependant on the "Box Model" - How much space does an element need.

* Margin - space between elements.
* Padding - how far the element is away from the beginning of the margin (border box).
* Border - boundary the of the content between the padding and margin.

Position Properties - how an element behaves next to it's `parent` and `siblings`.

* Static - layout an element within it's parent, next to it's siblings and they cannot be moved.
* Relative - layout an element within it's parent, next to it's siblings but it can be moved relative to it's parent or closest siblings.
* Absolute - Removes the element from it's immediate flow of siblings, still within the parent.
* Fixed - Remove the elements entirely from it's parent and sibling layout, and only moves relative to the view port.

## JS Fundamentals: Functions

Variables that store lines of code that can be re-used.
* Inputs
  * parameters / arguments
  * Parameters are varaibles defined within the function definition
* return values (outputs)
* scope (what is accessible inside a function and outside a function)

```js
// global scope
// let name = 'jacobOne';
let globalName = 'Adrian';

// function definition.
function sayName(name, string) { // function scoped
  console.log(globalName);
  console.log(string + name);
  let newName = name + string;
  return newName;
}
console.log(name); // this will return an error.

// function invocation (calling a function)
// You can't invoke functions that are not defined.
let arrayOfThings = sayName(); // the value of the parameter 'name' is created right here.
sayName('Kale', 'Hello I am');

// these function definitions are in scope of any code that runs in the browser.
prompt();
console.log()
alert();
```

## Lab Prep: Pair Programming

Driver: Fork the Navigators repo. The Driver is the only person that can write the code.
Navigator:

Step 1: Driver forks the navigators repo.
Step 2: Driver clones down their forked copy of the navigators repo.
Step 3: Driver and Navigator work together to complete lab requirements.
  (Refactoring the code to include functions).
Step 4: Driver pushes code to their fork.
Step 5: Driver opens a Pull Request to the Navigators repository.
Step 6: Submit a link to the PR.
