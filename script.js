var startButton 
var startTitleScreen = document.querySelector("");
var questionScreen 
var questions =""; 
var timerE1 ="";
var nextButton
var username
var answerBtn1

startButton.addEventListener('click', function(event) {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'block';
  username.style,display = 'none';
  timer();
  getNewQuestion();
})

function timer() {
  var timer = setInterval(function(){
    if (time === 0) {
      clearInterval(timer)
      endGame()
    }

  })
}


// storage function // 
if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  } else {
    sessionStorage.clickcount = 1;
  }

// button & timer function //
document.getElementById("beginButton").addEventListener("click", function(){
    var timer=100;
    timerLeft = document.getElementById("timeLeft");
})

// // toggle function // 
// toggledId = "startingTitleScreen";    
//     toggleElement("");
// toggledId = "questionBox";
//     toggleElement("");

// question function //


