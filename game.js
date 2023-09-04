var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence () {
    userClickedPattern = [];
    $("#level-title").text("Level " + level);
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}



$("div.btn").click(function() {
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
console.log(userClickedPattern);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswers(userClickedPattern.length-1);

})

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3")
    audio.play();
}

function animatePress (currentColor) {
 $("#" + currentColor).addClass("pressed");
 setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
 }, 100);
}

var started = false;

$(document).keydown(function() {
    if (!started) { 
        nextSequence();
        started = true;
    }
});

function checkAnswers (currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () { 
                nextSequence();
            }, 1000)
            
        }
    } else {
        $("#level-title").text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
         }, 200);
         startOver();
        }
    }

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

















