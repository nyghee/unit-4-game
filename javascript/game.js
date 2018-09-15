$(document).ready(function() {
    var randomSteven = Math.floor((Math.random() * 101) + 19);
    console.log(randomSteven);

$("#random").text(randomSteven);

var whiteRan;
var blueRan;
var yellowRan;
var pinkRan;

var steven = 0;

function randomDiamond() {
    for (var i = 0; i < 4; i++) {
    var randomD = Math.floor((Math.random() * 11) + 1);
    steven = randomD + steven; 
}


    console.log(randomD);
}

randomDiamond();

//create variables for each of the diamonds
//create a function that will generate a random onumber to each diamond
//Pass the variables through the function
//Create buttons for each diamond


})

