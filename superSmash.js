var prompt = require('prompt-sync')();

var mashArray = ["Final Destination", "Starfox", "NES", "Mother"];
var firstQuestion = [5, 10];
var secondQuestion = ["Solid Snake", "Sonic"];

//for (var i>0; i<2; i++){
    firstQuestion.push(prompt("How many times will you strike?"));
    secondQuestion.push(prompt("Who will you chose to fight?"));
//}

console.log("You fought " + secondQuestion[2] + " in the " + mashArray[Math.floor(Math.random()*4)] + " and you hit " + secondQuestion[Math.floor(Math.random()*2)] + " " + firstQuestion[2] +  " times.");
