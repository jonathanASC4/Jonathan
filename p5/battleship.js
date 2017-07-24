function setup(){
    createCanvas(600,600);
    background(225);
    
}

var c = 225

function draw(){
    background(c);
    for (var i = 1; i<width/100; i++) {
        fill(c);
        stroke(2);
        rectMode(CENTER);
        rect(i*100, 100, 100, 100);
        rect(i*100, 200, 100, 100);
        rect(i*100, 300, 100, 100);
        rect(i*100, 400, 100, 100);
        rect(i*100, 500, 100, 100);
    }
    
}

var shipx = Math.ceil(random(5))*100;
var shipy = Math.ceil(random(5))*100;

/*
switch(rawshipx) {
    case 1:
    shipx = 100;
    break;

    case 2:
    shipx = 200;
    break;

    case 3:
    shipx = 300;
    break;

    case 4:
    shipx = 400;
    break;

    case 5:
    shipx = 500
}
*/

function mousePressed() {
    if (mouseX <= shipx+100 && mouseX >= shipx-100 && mouseY <= shipy+100 && mouseY >= shipy-100){
        c = [0, 255, 0];
    } else {
        c = [255, 0, 0];
    }
}