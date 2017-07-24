var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
//var n = prompt('How many more times? ');
var balance = 1200;
var item = ["sword", "food"];
var cost = [500, 100];
var inventory = [];


while (balance>0){
    var purchaseChoice = prompt("What're you buyin'?");
    if (purchaseChoice == item[0] && balance >= cost[0]){
        balance = balance-cost[0];
        inventory.push(" sword");
    }
    else if (purchaseChoice == item [1] && balance >= cost[1]){
        balance = balance-cost[1];
        inventory.push(" food");
    }
    else{
        console.log("You can't buy that.");
    }
    console.log("You now have:" + inventory);
    console.log("You have " + balance + " left");
}