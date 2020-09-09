//Global variables
var timeEl = document.querySelector(".time");
var startButtonEl = document.getElementById("start-button");
// var answerButtonEl = document.querySelector(".answerButton");
var secondsLeft = 90;
var score = document.getElementById("score");
var questionsEl = document.getElementById("question-box");
var answers = document.getElementById("answer-buttons");
var questionsIndex = 0; 

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
    correct: "Alerts"
  },
  {
    question: "A very useful tool during development and debugging for printing content to the debugger is _______",
    answers: ["JavaScript", "Console log", "For loops", "Bash terminal"],
    correct: "Console log"
  },
  {
    question: "The condition in an if/else statement is enclosed within _______",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correct: "Curly brackets"
  },
  {
    question: "Arrays in JavaScript can be used to store _______",
    answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    correct: "All of the above"
  },
]
var questionPopulate = document.createElement("h1");
questionPopulate.textContent = quizArray[questionsIndex].question;
questionsEl.append(questionPopulate);
function nextQuestion(){

  if (questionsIndex < quizArray.length){
var questionPopulate = document.createElement("h1");
questionPopulate.textContent = quizArray[questionsIndex].question;
questionsEl.append(questionPopulate);
    //empty questions & answers 
    //show question (create tag add content and append)
 
    //loop through answers and add to DOM (create tag add content and append)
    questionsIndex++; //move to next question
  } else {
    console.log("no more questions")
  }
}


//here, we will have the questions index display its current [i] position, thus showing the question and
//answer buttons. Then log the answers and then set current index to the next one by question[i++], end by
//calling this function, thus repeating the process with the next question object in the array.

// answerButton.addEventListener("click", nextQuestion());
startButtonEl.addEventListener("click", setTime);
// answerButtonEl.addEventListener("click", nextQuestion);