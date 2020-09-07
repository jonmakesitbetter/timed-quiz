//Global variables
var timeEl = document.querySelector(".time");
var startButtonEl = document.getElementById('start-btn');

var secondsLeft = 90;

var questions = document.getElementById('question');
var answers = document.getElementById('answer-buttons');
//Timer starter and first question prompt
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    startButtonEl.style.display = "none";
    questionsIndex = 0;
    nextQuestion();{
    //Shows first question in the series, starting the looped function below 'nextQuestion'.
    }
    //Need to add final score prompt to secondsLeft === 0
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time!");
    }

  }, 1000);
}
//Questions object containing an array of question objects.
var questions = {
  question: 'Commonly used data types do not include: ',
  answers: [
    {'strings', correct: false},
    {'booleans', correct: false},
    {'numbers', correct: false},
    {'curly braces', correct: true},
  ]
}

function nextQuestion(){
//here, we will have the questions index display its current [i] position, thus showing the question and
//answer buttons. Then log the answers and then set current index to the next one by question[i++], end by
//calling this function, thus repeating the process with the next question object in the array.
}

startButtonEl.addEventListener("click", setTime);

