var timeE1=document.querySelector(".time");
var  mainE1=document.getElementById("main");
var headerE1=document.querySelector(".header");
var subHeaderE1=document.querySelector(".sub-header");
var olE1=document.querySelector(".answer-choices");
var secondsLeft=100;

var questions= [
    {Question:"Commonly used data types DO NOT Include: ",
    Choices:["String","Boolean","Numbers", "Alerts"],
    Answer: "Alerts"
},
   {Question:"The condition in an if/else statment is enclosed within ______",
    Choices:["1.quotes","2.curly brackets","3.parentheses","4.square brackets"],
    Answer:"3.Parentheses"},
    
    {Question:"Arrays in JavaScript can be used to store _____",
    Choices:["1.numbers and strings","2.other array","3.booleans","4.all of the above"],
    Answer:"4.all of the above"}

]


function startChallenge(){
    timeE1.textContent="time: 0"
    headerE1.textContent= "Coding Quiz Challenge";
    subHeaderE1.textContent= "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds!";
    var startBtn= document.createElement('button');
    startBtn.innerText= "start Quiz";
    subHeaderE1.appendChild(startBtn);
    startBtn.addEventListener('click', function(){ 
        setTime();
        playchallenge()

    })

function playchallenge(){
    

}

}
function setTime(){
    var timerInterval=setInterval(function(){
        secondsLeft--;
        timeE1.textContent='Time left: '+secondsLeft;
    
    if (secondsLeft==0){
        clearInterval(timerInterval);
        console.log("You Lost")

    }


},1000)
    

}



startChallenge();
