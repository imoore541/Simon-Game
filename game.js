// empty array which random colors will be pushed on
var gamePattern = [];

// new array with colors
var buttonColors = ["red", "blue", "green", "yellow"];

// random num gen function
function nextSequence() {
    
var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColor = buttonColors[randomNumber];
// part that pushes random colors to empty array
gamePattern.push(randomChosenColor);
// chooses correct button via id
var newSequence = $(document.getElementById(gamePattern.slice(-1)));
// provides chosen button an animation
$(newSequence.fadeOut(100).fadeIn(100));
    }

