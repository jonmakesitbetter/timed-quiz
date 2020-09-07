//Global variables
var timeEl = document.querySelector(".time");
var startButtonEl = document.getElementById('start-btn');
var answerButtonEl = document.querySelector(".answerButton");
var secondsLeft = 90;

var questionsEl = document.getElementById('question-box');
var answers = document.getElementById('answer-buttons');
questionsEl.style.display = "none";
answers.style.display = "none";
//Timer starter and first question prompt
function setTime() {
  var timerInterval = setInterval(function() {   
    questionsEl.style.display = "block";
    answers.style.display = "block";
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    startButtonEl.style.display = "none";
    quizObject.questionsIndex = 0;
     
    //Need to add final score prompt to secondsLeft === 0
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time!");
    }

  }, 1000);
}
function timerSubtract(){
  secondsLeft - 15;
}
//Questions object containing an array of question objects.

let quizObject = {
  "questionsIndex": ["Question 1", "Question 2", "Question 3"],
  "answerIndex": ["Answer 1", "Answer 2", "Answer 3"]
}

function nextQuestion(){
  questionsEl.textContent = quizObject.questionsIndex[0];
}
//here, we will have the questions index display its current [i] position, thus showing the question and
//answer buttons. Then log the answers and then set current index to the next one by question[i++], end by
//calling this function, thus repeating the process with the next question object in the array.


// answerButton.addEventListener("click", nextQuestion());
startButtonEl.addEventListener("click", setTime, nextQuestion);
answerButtonEl.addEventListener("click", nextQuestion);