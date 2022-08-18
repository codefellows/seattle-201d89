'use strict';

let correctAnswers = 0;

function sayName(string, name) {
  let greeting = string + name;
  return greeting;
}

let value = sayName('Hello I am ', 'jacob');

console.log(value);


function askQuestion(string) {
  let response = prompt(string);
  return response.toLowerCase();
}

function askQuestionWithAnswer(q,a) {
  let response = prompt(q);
  if (response.toLowerCase() === a.toLowerCase()) {
    correctAnswers++;
    return 'Correct!';
  } else {
    return 'Wrong!';
  }
}

// let userInput = askQuestion('How old are you?');
// console.log(userInput);

// let isCorrect = askQuestionWithAnswer('What is my name?', 'Jacob');

let questions = ['What is my name?'];
let answers = ['Jacob'];

for (let i = 0; i < questions.length; i++) {
  console.log(askQuestionWithAnswer(questions[i], answers[i]));
}

console.log(correctAnswers);
