# Class 09 - HTML Forms and JS Events API

## Warm Up

Extend (or build off of) the `Person` constructor into a Student Constructor, add whatever properties and methods you think is appropriate for a student.

```javascript

function Person(name, age) {
 this.name = name;
 this.age = age;
}

Person.prototype.birthday = function() {
 this.age = this.age + 1;
}

function Student (nameValue, ageValue, course, school) {
  this.course = course;
  this.school = school;
  Person.call(this, nameValue, ageValue);
}

Student.prototype = Object.create(Person.prototype);

```

## Code Review

* Salmon Cookies Home Page / CSS Wireframe.

## HTMl Forms

HTML is very user input heavy, and Form elements are our bread and butter, elements that users interact with the most, forms allow us to capture the "values" or "data" that users are trying to give us.

* Most forms use specific attributes to read values in JS.

```html

<body>
  <form id="pokemon-form">
    <input name="pokemon-name" type="text">
    <input name="pokemon-type" type="text">
    <input name="pokemon-health" type="number">
    <button type="submit">Create New Pokemon</button>
  <form>
</body>

```

## Events API

JS gives us a way to respond to things happening in the browser.

* HTML page loads.
* Communication between other systems / computers.
* Users typing / clicking / moving around the mouse.
* The Events API gives a way to "listen" for when a specific event occurs.
