//Global variables
var timeEl = document.querySelector(".time");
var startButtonEl = document.getElementById("start-button");
var secondsLeft = 90;
var score = document.getElementById("score");
var questionsEl = document.getElementById("question-box");
var answersEl = document.querySelector(".answer-buttons");
var questionsIndex = 0;

startButtonEl.setAttribute("style", "background-color: blue;");
//Timer starter
function setTime(event) {
  event.preventDefault();
  startButtonEl.style.display = "none";
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time!");
    }
  }, 1000);
}
function timerSubtract() {
  secondsLeft - 15;
}
//Questions object containing an array of question objects.

var quizArray = [
  {
    question: "Commonly used data types DO NOT include ______.",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts",
  },
  {
    question:
      "A very useful tool during development and debugging for printing content to the debugger is _______",
    answers: ["JavaScript", "Console log", "For loops", "Bash terminal"],
    correct: "Console log",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correct: "Curly brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _______",
    answers: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correct: "All of the above",
  },
];

function nextQuestion() {
  if (questionsIndex < quizArray.length) {
    questionsEl.innerHTML = "";
    var questionPopulate = document.createElement("h1");
    questionPopulate.textContent = quizArray[questionsIndex].question;
    questionsEl.append(questionPopulate);

    answersEl.innerHTML = "";

    //empty questions & answers
    for (var i = 0; i < quizArray[questionsIndex].answers.length; i++) {
      var answerRun = quizArray[questionsIndex].answers[i];
      var answersPopulate = document.createElement("button");

      answersPopulate.textContent = answerRun;
      answersEl.append(answersPopulate);
      // add event listener for button choice here
      answersPopulate.addEventListener("click", nextQuestion);
      
      // call function for buttons inside this function that cycle to next question. Leif says put questionsIndex++ here
    }
    questionsIndex++;
    //move to next question
  } else {
    finalScore();
  }
}
function finalScore(){
  questionsEl.innerHTML = "";
  answersEl.innerHTML = "";
  var allDone = document.createElement("h1");
  var yourScore = document.createElement("h2");
  allDone.textContent = "All done!";
  yourScore.textContent = "Your score is " + score + ".";
  questionPopulate.append(allDone);
  questionPopulate.append(yourScore);

}
//here, we will have the questions index display its current [i] position, thus showing the question and
//answer buttons. Then log the answers and then set current index to the next one by question[i++], end by
//calling this function, thus repeating the process with the next question object in the array.

startButtonEl.addEventListener("click", setTime);
startButtonEl.addEventListener("click", nextQuestion);
// document.getElementsByTagName("button").addEventListener("click", nextQuestion());

//myButton.textContent = quizArray[questionsIndex].answers[i]; ???
