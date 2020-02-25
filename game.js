// empty array for user input pattern
var userClickedPattern = [];

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

// plays audio cue for chosen button
var audio = newSequence.attr('id');
    makeSound(audio);

}

// detecting button clicks 
var mouseClickButton = $(".btn").click(function(){
// store id of button clicked in var
    var userChosenColor = $(this).attr('id');
// push clicked button id to empty array
    userClickedPattern.push(userChosenColor);
// plays audio cue for user clicks
    makeSound(userChosenColor);
});


    function makeSound(key) {

        switch (key) {
            case "red":
                var red = new Audio('sounds/red.mp3');
                red.play();
                    break;
            case "blue":
                var blue = new Audio('sounds/blue.mp3');
                blue.play();
                    break;
            case "yellow":
                var yellow = new Audio('sounds/yellow.mp3');
                yellow.play();
                    break;
            case "green":
                var green = new Audio('sounds/green.mp3');
                green.play();
                    break;
            case "wrong":
                var wrong = new Audio('sounds/wrong.mp3');
                wrong.play();
                    break;

                default: console.log(key);
        }}