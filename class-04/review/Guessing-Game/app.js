'use strict'; // strict syntax

console.log('app is running');

let correctAnswers = 0;

let user = prompt('What is you name?');
console.log(user);
if (user === null) {
  alert('You need to provide your name...');
  user = prompt('Please provide your name to continue...');
}
alert('Hello ' + user + '! Thank you for visiting my website. ');

let myAge = 33;
let userGuess = prompt('Am I 33 years old?');
if (userGuess.toLowerCase() === 'yes') {
  // console.log('Great guess! I am 33 years old.');
  alert('Great guess! I am 33 years old.');
  correctAnswers++;
} else if (userGuess.toLowerCase() === 'no') {
  // console.log('Unfortunately that is wrong. I am 33 years old.');
  alert('Unfortunately that is wrong. I am 33 years old.');
} else {
  // console.log('Why didn\'t you guess Yes or No!');
  alert('Why didn\'t you guess Yes or No!');
}

let myFavoriteShow = 'The Wire';
let userAttempt = prompt('Is my favorite TV Show The Sopranos?');
if (userAttempt.toLowerCase() === 'yes') {
  // console.log('Close! My Favorite TV Show is The Wire!');
  alert('Close! My Favorite TV Show is The Wire!');
} else if (userAttempt.toLowerCase() === 'no') {
  // console.log('Correct! My favorite TV Show is The Wire!');
  alert('Correct! My favorite TV Show is The Wire!');
  correctAnswers++;
}

let myFacialHair = 'True';
let userFacialHairGuess = prompt('Do I have a beard?');
if (userFacialHairGuess.toLowerCase() === 'yes') {
  // console.log('Correct! I do have a beard currently.');
  alert('Correct! I do have a beard currently.');
  correctAnswers++;
} else if (userFacialHairGuess.toLowerCase() === 'no') {
  // console.log('Wrong! I currently have a beard.');
  alert('Wrong! I currently have a beard.');
}

let myFavoriteTeam = 'Arsenal';
let userTeamGuess = prompt('Is Arsenal FC my favorite sports team?');
if (userTeamGuess.toLowerCase() === 'yes') {
  // console.log('Correct! Seahawks, Mariners, and Sounders are some of my other favorite teams.');
  alert('Correct! Seahawks, Mariners, and Sounders are some of my other favorite teams.');
  correctAnswers++;
} else if (userTeamGuess.toLowerCase() === 'no') {
  // console.log('Wrong! Arsenal FC are my Favorite team. COYG!');
  alert('Wrong! Arsenal FC are my Favorite team. COYG!');
}

let myFavoriteCity = 'Barcelona';
let userCityGuess = prompt('Is Paris my favorite city to travel to?');
if (userCityGuess.toLowerCase() === 'yes') {
  // console.log('That\'s wrong! Barcelona is my favorite city to travel to, ' + user + '.');
  alert('That\'s wrong! Barcelona is my favorite city to travel to, ' + user + '.');
} else if (userCityGuess.toLowerCase() === 'no') {
  // console.log('That\'s correct! Barcelona is actually my favorite city to travel to, ' + user + '.' );
  alert('That\'s correct! Barcelona is actually my favorite city to travel to, ' + user + '.');
  correctAnswers++;
}

let numberOfAttempts = 4;
let myFavoriteNumber = 27;
let userNumberGuess = parseInt(prompt('What is my favorite number?'));
while (userNumberGuess !== myFavoriteNumber && numberOfAttempts > 1) {
  if (userNumberGuess < myFavoriteNumber) {
    alert('That guess is too low!');
  } else {
    alert('That guess is too high!');
  }
  numberOfAttempts -= 1;
  userNumberGuess = parseInt(prompt('What is my favorite number?'));
}
if (userNumberGuess === myFavoriteNumber) {
  correctAnswers++;
  alert('That\'s correct! Great work! You gotten this many correct :' + correctAnswers);
} else{
  alert('You ran out of attempts, sorry! The correct answer is ' + myFavoriteNumber + '!');
}

let numberOfGuesses = 6;
let myFavoriteMusic = ['Outkast', 'Frank Ocean', 'The Weeknd', 'Lil Wayne', 'Young Thug', 'Jay-Z', 'Bob Marley'];
let userMusicianGuess = prompt('What is one of my favorite Musicians?');
let isFavorite = false;
while(numberOfGuesses > 0) {
  // iterate myFavoriteMusic to see if userMusicianGuess is inside, if it is set is favorite to true
  // is userMusicianGuess inside of userMusician.
  for (let i = 0; i < myFavoriteMusic.length; i++) {
    console.log(myFavoriteMusic[i]);
    if (userMusicianGuess.toLowerCase() === myFavoriteMusic[i].toLowerCase()) {
      isFavorite = true;
    }
  }

  // for (let music of myFavoriteMusic) {
  //   console.log(music);
  //   if(userMusicianGuess.toLowerCase() === music.toLowerCase()) {
  //     isFavorite = true;
  //   }
  // }

  if (isFavorite === false) {
    alert('That is wrong! Think Rap or R&B Music...');
  }
  //  else {
  //   alert('Still incorrect! Try again. Think about Southern Rap...');
  // }
  if (isFavorite === true) {
    alert('Correct! Great job! My Favorite Musicians are ' + myFavoriteMusic + '. You got a total of ' + correctAnswers + ' points.');
    correctAnswers++;
    break;
  }
  numberOfGuesses -= 1;
  if(numberOfGuesses === 0) {
    alert('You ran out of attempts, sorry! The correct answer is one of the following: ' + myFavoriteMusic + '! You got a total of ' + correctAnswers + ' points.');
  }
  userMusicianGuess = prompt('What is one of my favorite Musicians?');

}

alert('Your done!  You have answered ' + correctAnswers + ' questions correctly');
