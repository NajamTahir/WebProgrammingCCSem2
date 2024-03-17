function result() {
    var score = 0;
    if (document.getElementById('right1').checked) {
    score++;
    }
    if (document.getElementById('right2').checked) {
    Score++;
    }
    if (document.getElementById('right3').checked) { 
        score++;
    }
    if (score==3) {
    document.write("Your score is: "+ Score + "Excellent 3/3");
    }
    if (score == 2) {
        document.write("Your score is: " + score + "Good 2/3");
    }
    if (score == 1) {
        document.write("Your score is: " + score + "Try better next time! 1/3");
    }
    if (score == 0) {
    document.write("Your score is: " + score + "Needs more Learning 0/3");
    }
}
