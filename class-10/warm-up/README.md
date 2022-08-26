# Concept Review

Assume you are in a pair programming session, and are the navigator.  For each of the lines of code below, provide the (nerdy) english instructions that you would give to your partner (the driver) that would make them type the code shown.

For example, if you wanted the driver to write this code:

```javascript
let num = parseInt("2");
```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument "2".

## Javascript Fundamentals

```javascript
let name = "John";
```

```javascript
console.log( typeof(name) );
```

```javascript
let nums = new Array(10).fill('');
```

```javascript
let nums = [1,2,3,4,5];
```

```javascript
let nums = [];
```

```javascript
console.log( typeof(nums) );
```

```javascript
console.log( Array.isArray(nums) )
```

```javascript
for( const i=1; i<=100; i++ ) {
  nums.push(i);
}
```

```javascript
console.log(nums.length);
```

```javascript
console.log( nums[3] );
```

## Javascript Objects

```javascript
const john = {
  first: "John",
  last: "Cokos",
  lastName: "Cookoo",
  age: 50
}
```

```javascript
console.log(john.first);
```

```javascript
const keyword = "last";
```

```javascript
console.log(john.keyword);
```

```javascript
console.log(john[keyword]);  // john["last"] -> Cokos
```

```javascript
const props = ['first', 'last', 'hairType', 'age'];
```

```javascript
for( let i = 0; i<props.length; i++) {
  console.log( props[i],  john[props[i]]  ); // i=0 ... props[i]='john' ... john['first']
}
```

## Functions

```javascript
function sayHi(name) {
  console.log('Hi', name);
}
```

```javascript
const screamHello = function(name) {
  console.log( 'HELLO', name.toUpperCase() );
}
```

```javascript
sayHi('Lyndsey');
```

```javascript
screamHello('Jon');
```

## Constructors

```javascript
function Person(name) {
  this.fullName = name;
}
```

```javascript
Person.prototype.sayMyName = function() {
  console.log( this.fullName.toUpperCase() );
}
```

```javascript
Person.whisper = function() {
  console.log('sssshhhh');
}
```

```javascript
Person.sayMyName();
```

```javascript
const john = new Person('John Cokos');
```

```javascript
john.sayMyName();
```

```javascript
john.whisper();
```

```javascript
Person.whisper();
```

## CSS Selectors

Ref: https://www.w3schools.com/cssref/css_selectors.asp

Describe the elements these selectors would target

```css
div
```

```css
div.car
```

```css
.car
```

```css
#thing
```

```css
div > span;
```

```css
div span
```

```css
div + span
```

```css
div ~ span
```

```css
input[type=text]
```

```css
div:hover
```

```css
div:after
div:before
```

## CSS Layout Properties

```css
float:left;
float: right;
```

```css
clear:both;
```

```css
display:block;
````

```css
display:inline-block;
```

```css
position:absolute;
position:relative;
```

```css
position:fixed;
```

```css
visibility:hidden;
```

```css
display:none;
```
