'use strict'
let secretNumber=Math.trunc(Math.random()*20 )+ 1;
let score =20;
let highScore =0;
document.querySelector('.check').addEventListener
('click',function(){
    const inputnum=Number(document.querySelector('.inputnum').value);


if(!inputnum){
    document.querySelector('.show').textContent='⛔ No Number';
}

else if(inputnum===secretNumber){
    document.querySelector('.show').textContent='🎉 Correct Number';
    document.querySelector('.guessnumber').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.guessnumber').style.width='17rem';
    if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }

    
}
else if(inputnum>secretNumber){
    if(score>1){
        document.querySelector('.show').textContent='📈 Too High';
        score--;
        document.querySelector('.score1').textContent=score;
    }
    else{
        document.querySelector('.show').textContent='💥 You Lost The Game';
        document.querySelector('.score1').textContent='0';
    }

}
else if(inputnum<secretNumber){
    if(score>1){
        document.querySelector('.show').textContent='📉 Too Low';
        score--;
        document.querySelector('.score1').textContent=score;
    }
    else{
        document.querySelector('.show').textContent='💥 You Lost The Game !';
        document.querySelector('.score1').textContent='0';
        }
}
document.querySelector('.again').addEventListener('click' , function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20 )+ 1;
    document.querySelector('body').style.backgroundColor='rgb(17, 17, 17)';
    document.querySelector('.guessnumber').style.width='12rem';
    document.querySelector('.guessnumber').textContent='?';
    document.querySelector('.score1').textContent=score;
    document.querySelector('.show').textContent='Start guessing...';
} )
    



});