var timeE1=document.querySelector(".card-timer");
var time= document.querySelector("#time");
var headerE1=document.querySelector(".header");
var subHeaderE1=document.querySelector(".sub-header");
var secondsLeft=100;
var questionE1=document.querySelector(".question");
var answerE1=document.querySelector("#answer-choice1");
var answerE2=document.querySelector("#answer-choice2");
var answerE3=document.querySelector("#answer-choice3");
var answerE4=document.querySelector("#answer-choice4");
var i=0;
var startBtn= document.createElement('button');
answerE1.addEventListener("click",nextquestion);
answerE2.addEventListener("click",nextquestion);
answerE3.addEventListener("click",nextquestion);
answerE4.addEventListener("click",nextquestion);
var ol= document.querySelector("#choice-button");
var correct= document.querySelector('.correct-wrong');
var timerInterval=setInterval(setTime,1000);
clearInterval(timerInterval);

startBtn.addEventListener('click', function(){ 
    clearScreen();
    time.textContent=secondsLeft;
    timerInterval=setInterval(setTime,1000);
    getQuestion();
    ol.classList.remove("hide");
})





var questions= [
    {Question:"Commonly used data types DO NOT Include: ",
    Choices:["1.String","2.Boolean","3.Numbers", "4.Alerts"],
    Answer:"4.Alerts"
},
   {Question:"The condition in an if/else statment is enclosed within ______",
    Choices:["1.quotes","2.curly brackets","3.parentheses","4.square brackets"],
    Answer:"3.parentheses"
},
    
    {Question:"Arrays in JavaScript can be used to store _____",
    Choices:["1.numbers and strings","2.other array","3.booleans","4.all of the above"],
    Answer:"4.all of the above"
}

]
var length=questions.length
function nextquestion(event){
    if (questions[i].Answer==event.target.textContent){
        correct.textContent="correct!"
    }
    else{
        correct.textContent="wrong!"
        secondsLeft-=15
    }
    i++;
    if(i===length){
        getendPage();
    }

    else{
        getQuestion();
    }
   

}


function startChallenge(){
    headerE1.textContent= "Coding Quiz Challenge";
    subHeaderE1.textContent= "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds!";
    startBtn.innerText= "start Quiz";
    subHeaderE1.appendChild(startBtn);
    }
function clearScreen(){
    headerE1.textContent="";
    subHeaderE1.textContent="";

}
function setTime(){
        secondsLeft--;
        time.textContent=secondsLeft;
    if (secondsLeft===0){
        clearInterval(timerInterval);
        console.log("You Lost")

    }


}
    


function getQuestion(){
    var question= questions[i];
    questionE1.textContent=question.Question;
    answerE1.textContent=question.Choices[0];
    answerE2.textContent=question.Choices[1];
    answerE3.textContent=question.Choices[2];
    answerE4.textContent=question.Choices[3];
    
    

}

function getendPage (){
    clearInterval(timerInterval);
    clearScreen()
    questionE1.classList.add("hide");
    ol.classList.add("hide");
    correct.classList.add("hide");


    
}




startChallenge();

