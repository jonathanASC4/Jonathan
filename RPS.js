var choices = ["rock", "paper", "scissors"];
var player = choices[1];
var comp = choices[Math.floor(Math.random()*3)];

if (player == comp){
    console.log("Tie!");
} else if (player == choices[0]) {
    if (comp == choices[1]) {
        console.log("Paper beats rock! You lose!");
    } else {
        console.log("Rock beats scissors! You win!");
    }
} else if (player == choices[1]){
    if (comp == choices[0]){
        console.log("Paper beats rock! You win!");
    } else {
        console.log("Scissors beats paper! You lose!");
    }
} else if (player == choices[2]){
    if (comp == choices[0]){
        console.log("Rock beats scissors! You lose!");
    } else {
        console.log("Scissors beats paper! You win!");
    }
} 