'use strict';

let questions = [
  'What is my favorite color?',
  'what is my favorite movie?',
  'What is my favorite food?',
  'What is one of my favorite video games',
];
let answers = [
  'red',
  'face off',
  'fried chicken',
  ['elden ring', 'mario 64'],
];

for (let i = 0; i < questions.length; i++) {
  let response = prompt(questions[i]);

  if (typeof(answers[i]) !== 'string') {

    for (let answer of answers[i]) {
      if (response.toLowerCase() === answer) {
        alert('You Are correct');
        break;
      }
    }

  } else {
    if (response.toLowerCase() === answers[i]) {
      alert('That is correct!!!');
    } else {
      alert('That is Wrong!!');
    }
  }

}
