var timeEl = document.querySelector(".time");
var startButtonEl = document.getElementById('start-btn');

var secondsLeft = 90;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    startButtonEl.style.display = "none";
    nextQuestion();
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time!");
    }

  }, 1000);
}

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

}

startButtonEl.addEventListener("click", setTime);

