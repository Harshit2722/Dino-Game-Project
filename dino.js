const dino = document.querySelector('.dino');
const tree = document.querySelector('.tree');
const overGame = document.querySelector('.game-over');

let score = 0;
let gameRunning = true;
let scoreInterval; 

tree.classList.add('animT');


document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault(); // Prevent page scroll
        StartGame();
    }
});

function StartGame() {
    if(!dino.classList.contains('animD') && gameRunning){
        dino.classList.add('animD');
    }
    setTimeout(function(){
        dino.classList.remove('animD');
    },900)
}

scoreInterval = setInterval(function() {
    if(gameRunning) {
        score++;
        updateScore();
    }
},100);

function updateScore() {
    const scoreDisplay = document.querySelector('.score');
    if(scoreDisplay) {
        scoreDisplay.textContent = 'Score: ' + score;
    }
}

const gameOver = setInterval(function(){
    let crossY = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let crossX = parseInt(window.getComputedStyle(tree).getPropertyValue('left'));

if(crossX<50 && crossX>0 && crossY>=130){

    gameRunning = false; // Stop the game
        clearInterval(scoreInterval); // Stop score counting FIRST

    overGame.classList.add('over');
    tree.style.animationPlayState = 'paused'; // Stop the tree
     clearInterval(gameOver); // Stop checking for collisions

      const finalScore = document.querySelector('.final-score');
        if(finalScore) {
            finalScore.textContent = 'Final Score: ' + score;
        }
}
}
,10);