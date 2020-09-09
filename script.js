//Global variables
var timeEl = document.querySelector(".time");
var startButtonEl = document.getElementById("start-button");
// var answerButtonEl = document.querySelector(".answerButton");
var secondsLeft = 90;
var score = document.getElementById("score");
var questionsEl = document.querySelector(".card-body");
var answers = document.getElementById("answer-buttons");
var questionsIndex = 0; 

//Timer starter
function setTime(event) {
  event.preventDefault();
  startButtonEl.style.display = "none";
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    // quizObject.questionsIndex = 0;

    //Need to add final score prompt to secondsLeft === 0
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
    correct: ""
  },
  {
    question: "This is another question",
    answers: ["answer 1", "answer 2", "answer 3"],
    correct: ""
  },
]

// }, "A very useful tool during development and debugging for printing content to the debugger is ", "Question 3"]
  


function nextQuestion(){

  if (questionsIndex < quizArray.length){

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