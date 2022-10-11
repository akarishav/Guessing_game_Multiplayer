`use strict`;

let num = Math.trunc(Math.random()*20)+1;
console.log(num);

let currentplayer = 0;

let player1_score = 0;
let player2_score = 0;

let count = 0;
let highScore = 0;



document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);

    if (currentplayer===1){
        document.querySelector('.playerschance').textContent = "Player 1 play";
    }else{
        document.querySelector('.playerschance').textContent = "Player 2 play";
    }


    if (guess===num & currentplayer===0){
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = "Congrats! Player1 won this round";
        document.querySelector('.number').textContent = guess;
        player1_score = player1_score+10;
        document.querySelector('.p--0--score').textContent = player1_score;
        num = Math.trunc(Math.random()*20)+1;
        console.log(num);
    }else if (guess===num & currentplayer===1){
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = "Congrats! Player2 won this round";
        document.querySelector('.number').textContent = guess;
        player2_score = player2_score+10;
        document.querySelector('.p--1--score').textContent = player2_score;
        num = Math.trunc(Math.random()*20)+1;
        console.log(num);
    }else{
        document.querySelector('.message').textContent = "oops you guess the wrong number.";
        document.querySelector('.guess').value = '';
        document.querySelector('.number').textContent = '?';
    }

    if (player1_score>=30){
        document.querySelector('.highscore').textContent = "Player1 is the winner of previous round."; 
        alert("Player 1 win the game");
        player1_score =0;
        player2_score =0;
        document.querySelector('.message').textContent = "Start guessing...";
        document.querySelector('.p--1--score').textContent = player2_score;
        document.querySelector('.p--0--score').textContent = player1_score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
    }
    if (player2_score>=30){
        document.querySelector('.highscore').textContent = "Player2 is the winner of previous round.";
        alert("Player 2 win the game");
        player1_score =0;
        player2_score =0;
        document.querySelector('.message').textContent = "Start guessing...";
        document.querySelector('.p--1--score').textContent = player2_score;
        document.querySelector('.p--0--score').textContent = player1_score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

    }
    if (!guess){
        document.querySelector('.message').textContent = "No number";
    }
    currentplayer = currentplayer===0 ? 1:0;
    console.log(currentplayer); 
});

document.querySelector('.again').addEventListener('click', function(){
    num = Math.trunc(Math.random()*20)+1;
    console.log(num);
    player1_score =0;
    player2_score =0;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.p--1--score').textContent = player2_score;
    document.querySelector('.p--0--score').textContent = player1_score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})

