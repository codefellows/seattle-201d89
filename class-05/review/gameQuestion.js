'use strict';

let chances = 6;
let correctAnswers = 0;
let questions = [
  'Is my favorite color purple ? ',
  'Is my favorite movie There will be blood?',
  'Is my favorite book The Hobbit?',
  'Is Austria my favorite country to visit?',
  'What are some of my favorite games?'
];
let gameAnswers = [
  'skyrim',
  'elden ring',
  'dark souls',
  'pubg'
];


function gameQuestion(q, a) {
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
    chances--;
    alert('Try again!');
    gameQuestion(q, a);
  }
}

gameQuestion(questions[4], gameAnswers);
alert('Total correct: ' + correctAnswers);
