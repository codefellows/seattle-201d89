# Class 05 - Images / Fonts / Git Branching

## Announcements

1 on 1 synch with me, please complete the 1 on 1 instructor synch assignment.

### Secondary resources

* Eloquent JS
* Hackerrank: different challenge categories (there is one for loops!).

## Warm Up

Prompt: Create a function that takes in 2 parameters, first parameter is a string, the second parameter is a number, add the string to an array, use the number to add the string at that particular index. Return the array.

```javascript
function add2Array (string, number) {
  let ourArray = [1,2,3,4,5];
  ourArray[number] = string;
  return ourArray;
}

let response = add2Array('test',2);
// add2Array('test',2)

console.log(response);
```

## Code Review

What are some functions you created for lab?

Ian: Math Question

```js

function gameQuestion(q,a) {
  let correct = false;
  if (chances === 0) {
    alert('Out of chances... The options were skyrim, elden ring, dark souls, and pubg.');
    return;
  }
  // Asking question
  alert('You have ' + chances + ' chances left');
  let response = prompt(q);
  // Take answer, check the array of correct answers
  for (let i = 0; i <= 3; i++) {
  //if it is matching one, return good
    if (response === a[i]) {
      correct = true;
    }
  }
  if (correct === true) {
    alert('You got it! The options were skyrim, elden ring, dark souls, and pubg.');
    correctAnswers++;
    return;
  }
  else {
    chances --;
    alert('Try again!');
    gameQuestion(questions[4], gameAnswers);
  }
}

```

## Images and Fonts (HTML / CSS)

Images are pictures, adding them to webpages adds extra types of content to be displayed, not just text.

```html

<div>
  <img src="path/to/file.png" alt="Image of a cute cat">
</div>

```

Images are displayed inline / instead of as a block.

## Branching with Git
