// storage function // 
if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  } else {
    sessionStorage.clickcount = 1;
  }
  document.getElementById("result").innerHTML = "You have clicked the button " +
  sessionStorage.clickcount + " time(s) in this session.";

// button & timer function //
document.getElementById("beginButton").addEventListener("click", function(){
    var timer=100;
    timerLeft = document.getElementById("timeLeft");
})

// toggle function // 
toggledId = "startingTitleScreen";    
    toggleElement("");
toggledId = "questionBox";
    toggleElement("");

// question function //
var questionScreen


