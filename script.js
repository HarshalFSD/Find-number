'use strict';

/*
document.querySelector('.message').innerHTML = 'Correct Number 🥳🥳';
document.querySelector('.number').innerHTML = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '😎 Correct Number!';
    displayMessage('😎 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('h1').textContent = `Congrats! You've,won`;
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
  } else if(guess !== secretNumber) {
    if(score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        // document.querySelector('body').style.backgroundColor = '#9B0000';
        // document.querySelector('.message').textContent = guess > secretNumber ? '👆 To HIGH!' : '👇 To LOW!';
        displayMessage(guess > secretNumber ? '👆 To HIGH!' : '👇 To LOW!');
    } else {
        document.querySelector('.highscore').textContent = 0;
        // document.querySelector('.message').textContent = '😁 You Lost Game!';
        displayMessage('😁 You Lost Game!');
    }
}
//   } else if (guess > secretNumber) {
//         if(score > 1) {
//             score--;
//             document.querySelector('.score').textContent = score;
//             document.querySelector('body').style.backgroundColor = '#9B0000';
//             document.querySelector('.message').textContent = '👆 To HIGH';
//         } else {
//             document.querySelector('.highscore').textContent = 0;
//             document.querySelector('.message').textContent = '😁 You Lost Game!';
//         }
//   } else if (guess < secretNumber) {
//         if(score > 1) {
//             score--;
//             document.querySelector('.score').textContent = score;
//             document.querySelector('body').style.backgroundColor = '#A68DAD';
//             document.querySelector('.message').textContent = '👇 To LOW';
//         } else {
//             document.querySelector('.message').textContent = '😁 You Lost Game!';
//             document.querySelector('.highscore').textContent = 0;
//         }
//   }
});

document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('h1').textContent = 'Guess My Number!';
})