var startButton = document.getElementById("#submit");
var timerEl = document.getElementById("#timer");

var secondsLeft = 3;

function setTime() {
  var startTime = setInterval(function () {
    secondsLeft--;
    console.log(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(startTime);
      alert("Time!");
    }
  }, 1000);
}


document.addEventListener("click", setTime);
