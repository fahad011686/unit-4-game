var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var Random = function (min, max) {
    return Math.floor(Math.random() * 11);
};
// console.log(Random(1, 10));


var newGame = function () {
    gem1 = Random(1, 10);
    gem2 = Random(1, 10);
    gem3 = Random(1, 10);
    gem4 = Random(1, 10);
    //set target score
    targetScore = Random(1, 10) * 5;
    console.log("Starting new game. Your Target Score is " + targetScore);
    $("#goalBox").text(targetScore);

    yourScore = 0;
    $("#yourScore").text(yourScore);
}

newGame();
var wins = 0;
var losses = 0;

var checkWin = function () {
    if (yourScore > targetScore) {
        alert("You Lose:( Click to play again.");
        document.getElementById('audio_lose').play();
        losses++;
        $("#loseBox").text(losses);
        newGame();
    }

    else if (yourScore === targetScore) {
        alert("You Won! Click to play again.");
        document.getElementById('audio_win').play();
        wins++;
        $("#winBox").text(wins);
        newGame();
    }

};


var tally = function (x) {
    yourScore += x;
    console.log("That gem earned you " + x + " points!")
    $("#yourScore").text(yourScore);
    document.getElementById('audio').play();
    checkWin();
}



//button functions
$("#gem1").click(function () {
    tally(gem1);
});
$("#gem2").click(function () {
    tally(gem2);
});
$("#gem3").click(function () {
    tally(gem3);
});
$("#gem4").click(function () {
    tally(gem4);
});



















