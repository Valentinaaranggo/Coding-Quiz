var timeE1=document.querySelector(".time");
var  mainE1=document.getElementById("main");
var headerE1=document.querySelector(".header");
var subHeaderE1=document.querySelector(".sub-header");
var olE1=document.querySelector(".answer-choices");


function startChallenge(){
    headerE1.textContent= "Coding Quiz Challenge";
    subHeaderE1.textContent= "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 15 seconds!";
    var startBtn= document.createElement('button');
    startBtn.innerText= "start Quiz";
    subHeaderE1.appendChild(startBtn);
    startBtn.addEventListener('click', function(){
        question1();
    })



}
function question1(){
    headerE1.textContent="commonly used data types DO NOT include:";
    subHeaderE1.textContent=""
    var liE1= document.createElement('li');
    var liE2= document.createElement('li');
    var liE3= document.createElement('li');
    var liE4= document.createElement('li');
    olE1.appendChild(liE1);
    olE1.appendChild(liE2);
    olE1.appendChild(liE3);
    olE1.appendChild(liE4);
    var choiceOne=document.createElement('button');
    var choiceTwo=document.createElement('button');
    var choiceThree=document.createElement('button');
    var choiceFour=document.createElement('button');
    liE1.appendChild(choiceOne);
    liE2.appendChild(choiceTwo);
    liE3.appendChild(choiceThree);
    liE4.appendChild(choiceFour);
    choiceOne.textContent="strings";
    choiceTwo.textContent="boolean";
    choiceThree.textContent="numbers";
    choiceFour.textContent="alerts";
}

startChallenge();
