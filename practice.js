let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Event handler 'click'
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);


    // When there is no input.
    if(!guess) {
        document.querySelector('.message').textContent = "⛔ No Number!";

        // When player wins!
    } else if(guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = "😎 Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When there is to High input!
    } else if(guess > secretNumber) {

        // 
        if(score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "👆 Too High!";
            document.querySelector('body').style.backgroundColor = '#950101';
        } else {
            document.querySelector(".message").textContent = "🔥 You Lost the Game!";
            document.querySelector('.score').textContent = 0;
        }

        // When there is Low Input
    } else if(guess < secretNumber) {
        if(score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "👇 Too Low!";
            document.querySelector('body').style.backgroundColor = '#6E85B2';
        } else {
            document.querySelector(".message").textContent = "🔥 You Lost the Game!";
            document.querySelector('.score').textContent = 0;
        }
    }

});

let originalDOM = document.querySelector('body');

document.querySelector('.again').addEventListener('click',function() {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = "#191919";
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})
