/*function welloHorld(){
    console.log("Wello Horld!");
    return "Wello Horld!";
}

welloHorld(); */
/*function rand(num){
    return Math.floor(Math.random()*num)
}

rand(100);*/

var students = ["Jonathan", "Rocket", "Ricky", "Nick", "Josh", "Fenov"]
function randName(){
    return students[Math.floor(Math.random()*5)]
}
randName();