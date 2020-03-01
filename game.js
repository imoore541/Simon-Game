// empty array for user input pattern
var userClickedPattern = [];
// empty array which random colors will be pushed on
var gamePattern = [];

// new array with colors
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

// dectecting first keyboard click to start game
$(document).keydown(function(event) {
    //var k = event.keyCode;
    //var started = (k == true);
    if (!started) {
        nextSequence();
        started = true;
    }
    if ((started = true)) {
        $("h1").text("Level " + level);
    }
});

// detecting mouse clicks
$(".btn").click(function() {
    // store id of button clicked in var
    var userChosenColor = $(this).attr("id");
    // push clicked button id to empty array
    userClickedPattern.push(userChosenColor);
    // plays audio cue for user clicks
    makeSound(userChosenColor);
    // animates button on click
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

// main function, random num gen + setting up array
function nextSequence() {
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    // part that pushes random colors to empty array
    gamePattern.push(randomChosenColor);
    // chooses correct button via id
    var newSequence = $(document.getElementById(gamePattern.slice(-1)));
    // provides chosen button an animation
    $(newSequence.fadeOut(100).fadeIn(100));
    // plays audio cue for chosen button
    var audio = newSequence.attr("id");
    makeSound(audio);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

// reset function, resets all values
function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
    started = false;
}

// function for clicked button animation
function animatePress(currentColor) {
    var tileAnimate = $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
        $(tileAnimate).removeClass("pressed");
    }, 100);
}

// function for audio
function makeSound(key) {
    switch (key) {
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;

        default:
            console.log(key);
    }
}
