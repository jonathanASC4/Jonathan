function setup(){
    createCanvas(400, 300);
    background(0, 255, 0);
}

var hp = 100
var hp2 = 100
var p1Attack = [" Thunder Shock", " Quick Attack", " Spark"];
var p2Attack = ["Ember", "Scratch", "Fire Fang"];

var message = "";
var message2 = "";

function draw(){
    if (hp > 0 && hp2 > 0) {
        background(0, 255, 0);
        stroke("black");
        fill("white");
        rect(100, 140, 20, 40);
        rect(300, 160, 40, 20);
        rect(150, 225, 350, 75);
        fill("black");
        text("hp: " + hp, 100, 200);
        text("hp: " + hp2, 280, 130);
        rect(100, 210, hp, 5);
        rect(280, 140, hp2, 5);
        text(message, 5, 20);
        text(message2, 5, 35)
        for (var i = 0; i < p1Attack.length; i++){
            text(p1Attack[i], 155, 250 + i*15);
        }
        if (hp < 0){
        hp = 0;
        }
        if (hp2 < 0){
            hp2 = 0;
        }
    } else if (hp < 0) {
        background(255, 0, 0);
        text("YOU LOSE", 180, 150);
    } else if (hp2 < 0) {
        background(0, 0, 255);
        text("YOU WIN!", 180, 150);
    }
    
}

var fireFang = 2;
var sparkAttack = 2;
var compAttack = 0;

function mousePressed() {
    if (hp > 0){
    if (event.clientX>155 && event.clientX<400 && event.clientY > 250 && event.clientY < 262){
        fill("black");
        message = "Player used "+p1Attack[0];
        hp2 -= 40 - Math.floor(Math.random()*20);
        setTimeout(enemyAttack, 3000);
    }
    if (event.clientX>155 && event.clientX<400 && event.clientY > 262 && event.clientY < 277){
        fill("black");
        message = "Player used "+p1Attack[1];
        hp2 -= 40 - Math.floor(Math.random()*20);
        setTimeout(enemyAttack, 3000);
    }
    if (event.clientX>155 && event.clientX<400 && event.clientY > 277 && event.clientY < 290 && sparkAttack%2){
        fill("black");
        message = "Player used "+p1Attack[2];
        hp2 -= 65 - Math.floor(Math.random()*60);
        sparkAttack += 1;
        setTimeout(enemyAttack, 3000);
    } else if (event.clientX>155 && event.clientX<400 && event.clientY > 277 && event.clientY < 290) {
        sparkAttack += 1;
        setTimeout(enemyAttack, 3000);
    }
    }
}

function enemyAttack(){
    if (hp2 > 0){
    compAttack = Math.floor(Math.random()*3);
    message2 = "Comp used "+p2Attack[compAttack];
    if (compAttack == 0) {
        hp -= 40 - Math.floor(Math.random()*20);
    }
    if (compAttack == 1) {
        hp -= 40 - Math.floor(Math.random()*20);
    }
    if (compAttack == 2 && fireFang%2){
        fireFang += 1;
    } else if (compAttack == 2) {
        hp -= 50 - Math.floor(Math.random()*50);
        fireFang += 1;
    }
    }
}