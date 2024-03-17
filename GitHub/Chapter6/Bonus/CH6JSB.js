// RGB Color Guessing Game

// Array to store RGB color values
var colors = generateRandomColors(3);
// Selecting a color to guess
var pickedColor = pickColor();
// Display RGB color value to guess
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
// Selecting elements
var messageDisplay = document.getElementById("message");
var options = document.getElementById("options");
var scoreDisplay = document.getElementById("scoreValue");
var livesDisplay = document.getElementById("livesValue");
var restartButton = document.getElementById("restartBtn");

// Initialize score and lives
var score = 0;
var lives = 3;
scoreDisplay.textContent = score;
livesDisplay.textContent = lives;

// Create color options
for (var i = 0; i < colors.length; i++) {
    var option = document.createElement("div");
    option.classList.add("option");
    option.style.backgroundColor = colors[i];
    option.addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            score++;
            scoreDisplay.textContent = score;
            restartButton.textContent = "Play Again?";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#f2f2f2";
            messageDisplay.textContent = "Try Again";
            lives--;
            livesDisplay.textContent = lives;
            if (lives === 0) {
                messageDisplay.textContent = "Game Over";
                restartButton.textContent = "Play Again?";
            }
        }
    });
    options.appendChild(option);
}

// Restart button functionality
restartButton.addEventListener("click", function() {
    // Reset lives and score
    lives = 3;
    livesDisplay.textContent = lives;
    score = 0;
    scoreDisplay.textContent = score;
    // Generate new colors
    colors = generateRandomColors(3);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // Change colors of options
    for (var i = 0; i < colors.length; i++) {
        options.children[i].style.backgroundColor = colors[i];
    }
    // Reset message display
    messageDisplay.textContent = "";
    // Reset restart button text
    restartButton.textContent = "Restart";
});

// Function to pick a random color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Function to generate an array of random colors
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Function to generate a random color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function to change all options to the correct color when guess is correct
function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        options.children[i].style.backgroundColor = color;
    }
}