//Global variables
var timeEl = document.querySelector(".time");
var startButtonEl = document.getElementById("start-button");
var secondsLeft = 90;
var score = 0;
var questionsEl = document.getElementById("question-box");
var answersEl = document.querySelector(".answer-buttons");
var questionsIndex = 0;
var currentQuestion = {};
var messageDiv = document.getElementById("message-div");
// var testScoreButton = document.querySelector("#submit-initials");
var textInput = document.querySelector(".text-input");
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
    correct: "Parentheses",
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
    currentQuestion = quizArray[questionsIndex];
    questionPopulate.textContent = currentQuestion.question;
    questionsEl.append(questionPopulate);

    answersEl.innerHTML = "";

    //empty questions & answers
    for (var i = 0; i < currentQuestion.answers.length; i++) {
      var answerRun = currentQuestion.answers[i];
      var answersPopulate = document.createElement("button");

      answersPopulate.textContent = answerRun;
      answersEl.append(answersPopulate);

      answersPopulate.addEventListener("click", nextQuestion);

      answersPopulate.addEventListener("click", function (event) {
        event.preventDefault();
        if ((event.target.textContent = currentQuestion.correct)) {
          score++;
        }
      });
    }
    questionsIndex++;
    //move to next question
  } else {
    finalScore();
  }
}
//Final score DOM elements
function finalScore() {
  questionsEl.innerHTML = "";
  answersEl.innerHTML = "";

  var submitInitialsBtn = document.createElement("button");
  submitInitialsBtn.textContent = "Submit";
  questionsEl.append(submitInitialsBtn);

  var testText = document.createElement("input");
  testText.textContent = "";
  questionsEl.append(testText);

  var allDone = document.createElement("h1");
  var yourScore = document.createElement("h2");
  var yourInitials = document.createElement("h2");

  allDone.textContent = "All done!";
  yourScore.textContent = "Your score is " + score + ".";
  yourInitials.textContent = "Enter your initials: ";

  questionsEl.append(allDone);
  questionsEl.append(yourScore);
  questionsEl.append(yourInitials);

  submitInitialsBtn.addEventListener("click", highScore);
}
function highScore(event) {
  event.preventDefault();
  questionsEl.innerHTML = "";
  var scoreBoard = document.createElement("h1");
  scoreBoard.textContent = score;
  questionsEl.append(scoreBoard);

  subtmitInitialsBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = testText.textContent().value;

    localStorage.setItem("initials", initials);
  });
}

startButtonEl.addEventListener("click", setTime);
startButtonEl.addEventListener("click", nextQuestion);