# Class 03 - CSS Box Model, Arrays and Loops

## Code Review

Ben - functions are fine / functions are introduced tomorrow.
Maximo - conditional statements

* logical operators, (&& / || / ==)
Sage - Asking yes or no questions, going back to ask the question.
Erik - Reading - learn javascript
* Evaluating expressions.

```javascript

const people = [
  ['pete', 32, 'librarian', null],
  ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'],
  ['bill', null, 'artist', null]
  ];

people[1] // ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'],
people[1][2] // accountant


let a = 10;
let b = 'dog';
let c = false;

// evaluate this
(10 + true) + 'dog'; // '10dog' => true and false ()
```

## CSS Box Model

Everything you see in the browser is a box. Every box has 4 things that give it shape, and allow those elements to be laid next to other elements.

* height / width: the literal computed size of you content.
* Padding: the space between the content and the border box.
* Border: A thin / invisible (until specified) that surrounds the content.
* Margin: The space between the border and any neighboring elements.

## Arrays

A container for other data types.  A new structure that is meant to group data together.

* all data within an array is organized / order using index numbers, starting at 0.  

```javascript

let name = 'Jacob';
let age = 31
let doesProgramming = true;

let instructor = [name, age, doesProgramming];

console.log(instructor); // ['Jacob', 31, true];

instructor[0]; // how far do we have to look into the array to read a value. => 'Jacob'
instructor[1]; // we need to move 1 position from the beginning. => 31
instructor[100]; // we're at 100 positions into our bucket => undefined.

instructor[instructor.length - 1]; // number representing how many things are stored in the array.

let questions = [];
let responses = [];
let answers = [];

questions[0] = 'How old are you?';
questions; // ['How old are you?'];

questions.push('What is my favorite color');
//questions[5] = 'What is my favorite color';
questions; // ['How old are you?', 'What is my favorite color']

let response = prompt(questions[0]);
responses.push(response);

response = prompt(questions[1]);
responses.push(response);
questions; // ['How old are you?', 'What is my favorite color']
responses; // ['31', 'red'];

questions.pop(); // 'What is my favorite color'
questions; // ['How old are you?'];

// MDN: Array.prototype.splice => removing items from the middle of an array, multiple items from an array.
```

## Loops!!

What is a loop: something that lets us run code more than once.
* All loops should run, as long as a condition is true.
* 3 types: For loop / while / do while loop

```javascript

// for loop signature
// 3 things to add to our basic for loop
//    2 statements and 1 expression
let i = 0; // => statement that initialized our loop.
i < 4; // expression that determines whether the loop is run again.
i = i + 1; // statement that is run after the code block is executed.
for (let i = 0; i > 0; i++) {
  console.log('this loop has run ' + i + ' times');
}
let numbers = [1,2,3,4,5];
for (let banana of numbers) {
  console.log(number);
}

// while loop signature
let isDone = false;
let numberOfRuns = 5;
while (numberOfRuns > 0) {
  console.log('We\'re not done' + numberOfRuns);
  numberOfRuns--;
}

numberOfRuns = 0;
do {
  console.log('this is running');
} while(numberOfRuns > 0)

```

## Lab Prep