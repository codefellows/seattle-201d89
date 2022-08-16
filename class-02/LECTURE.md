# Class 02 - JS Fundamentals

## Announcements

* Lab Due Dates: Right now due at midnight, propose having them due at 9:00 AM.

## Review

### HTML Tags

Sage: H1 tag, div tag.

* h1 - top level header / large text.
  * There can only be one.
* div - creates a division in page.  Wraps elements / things on the page up in a "box".

Rounded borders!!

Wrapping our div tags in sections.  Trying to get a "card" like shape.

### CSS Styling

Timothy: changed the background color of the whole page / paragraphs. The text also has a different color.

```html
<html>
  <head>
    <style>
      body {
        background-color: blue;
      }

      html {
        background-color: red;
      }
    </style>
  </head>


  <body>
    <p style="background-color: red;"></p>
  </body>
</html>
```

### JS

* `console.log`: writes something in the console. (outputs to the console).  Gives us some indication of whats happening.
  * you can execute either in any order.
  * This is a good troubleshooting tool.
* `alert`: used to ask a question? -> Display something to the user. User clicks an "OK" button.
* `prompt`: Used to get input from the user. "What is your name?" -> gives us a value from the user.
* Expressions: Any valid js that evaluates to some value.

```js
let name = prompt('What is your name?'); // the prompt is going to be an expression

console.log('You name is : ' + name); // whatever the user types should be logged in the console.
```

* Statements: Any valid JS that does something.

## Code Review

Thanks Ian!

## Data Types

Loosely typed language = types can change.

* String: natural language characters.
* Numbers: 1 - 100000000 / fractions / decimals.
* Boolean: True / False (truthy / falsey)
* undefined: lacking a value.
* null: setting something to have no value.
  * NaN: No a Number(very special, usually means you would have an error).
  * isNan(). (is something NaN).

```js

let name = 'Jacob'; // string

let age = 31; // Number

let likesCode = true;
let hatesCoffee = false; 

let nothing; // undefined 

nothing = null; // assign the value of null.

let ageString = '31';

age + name; // turns age into the string '31' adds 'Jacob' => 31Jacob

```

## Conditional Statements

Controlling which lines of code are run.

[See Whiteboard for examples](https://projects.invisionapp.com/freehand/document/eho8tlqYg)

## DEMO: Building a Guessing Game


