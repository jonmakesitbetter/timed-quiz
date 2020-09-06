var timeEl = document.querySelector(".time");
var startButtonEl = document.getElementById('start-btn');

var secondsLeft = 90;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time!");
    }

  }, 1000);
}

startButtonEl.addEventListener("click", setTime);
