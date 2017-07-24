function setup(){
    createCanvas(500,500);
    background(255);
    textSize(15);
    fill("black");
}
var score = 0;
var sentenceGiven = "I am dumb";
var sentenceTyped = "";
var sentenceKeys = sentenceGiven.split("")

function draw(){
    background(100)
    text("Type the sentence below.", 0, 50);
    text("Score: "+score, 0, 450);
    text(sentenceGiven, 0, 100);
    text(sentenceTyped, 150, 150);

}

function keyTyped(){
    console.log(key);
    sentenceTyped=sentenceTyped+key;
    console.log(sentenceTyped);
    text(sentenceTyped, 150, 150);
    if (sentenceTyped == "I am dumb"){
        score = score+10;
        sentenceTyped = "";
        sentenceGiven = "Hello There"
    }
}

/*
//var prompt = require('prompt-sync')();
var score = 0;
function setup(){
    createCanvas(1200,400);
    background(255);
    textSize(20);
    fill("black");
    
}
var lala = 0;
var lala2 = 250;
function draw(){
    background(255);
    text("Please type the following sentences:", 0, 100);
    text("Score: " + score, 0, 300);
    
}

function lettersplit(){
    
}
var letters = "Sendaboltoflightning";
var newletters = letters.split("");
function keyTyped(){
    var blah = 1;
    /*lala = lala+15;
    if (lala == 1180){
        lala=0;
        lala2= lala2+30
    }

    //text(key, lala, lala2);
    if (key == 'S' && blah == 1){
        score= score + 1;
        blah++;
    }else if (key == 'e' && blah == 2){
        score= score + 1;
        blah++;
    } else if (key == 'n' && blah == 3){
        score= score + 1;
        blah++;
    } else if (key == 'd' && blah == 4){
        score= score + 1;
        blah++;
    } else if (key == ' ' && blah == 5){
        score= score + 1;
        blah++;
    } else if (key == 'a' && blah == 6){
        score= score + 1;
        blah++;
    } else if (key == ' ' && blah == 7){
        score= score + 1;
        blah++;
    } else if (key == 'b' && blah == 8){
        score= score + 1;
        blah++;
    }else if (key == 'o' && blah == 9){
        score= score + 1;
        blah++;
    } else if (key == 'l' && blah == 10){
        score= score + 1;
        blah++;
    } else if (key == 't' && blah == 11){
        score= score + 1;
        blah++;
    } else if (key == ' ' && blah == 12){
        score= score + 1;
        blah++;
    } else if (key == 'o' && blah == 13){
        score= score + 1;
        blah++;
    } else if (key == 'f' && blah == 14){
        score= score + 1;
        blah++;
    } else if (key == ' ' && blah == 15){
        score= score + 1;
        blah++;
    } else if (key == 'l' && blah == 16){
        score= score + 1;
        blah++;
    } else if (key == 'i' && blah == 17){
        score= score + 1;
        blah++;
    } else if (key == 'g' && blah == 18){
        score= score + 1;
        blah++;
    } else if (key == 'h' && blah == 19){
        score= score + 1;
        blah++;
    } else if (key == 't' && blah == 20){
        score= score + 1;
        blah++;
    } else if (key == 'n' && blah == 21){
        score= score + 1;
        blah++;
    } else if (key == 'i' && blah == 22){
        score= score + 1;
        blah++;
    } else if (key == 'n' && blah == 23){
        score= score + 1;
        blah++;
    } else if (key == 'g' && blah == 24){
        score= score + 1;
    }
    /*if (key == "Send a bolt of lightning"){
        score = score+10;
    }
    if (key == "I am an idiot"){
        score = score+10;
    }
    if (key == "Whom'st'd've'ed"){
        score = score+10;
    }
    if (key == "I am bad at everything"){
        score = score+10;
    }
    if (key == "qngksngotma"){
        score = score+10;
    }
    
}*/