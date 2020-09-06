var timeEl = document.querySelector(".time");
var startButton = document.getElementById("#start-btn");

var secondsLeft = 10;

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
document.addEventListener("click", setTime);
