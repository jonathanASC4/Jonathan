function setup(){
    createCanvas(600,600);
}

var x = 60;
var y = 120;
var xSpeed = 10;
var ySpeed = 10;

function draw(){
    background(255, 193, 204);
    ellipse(x,y,60,60);
    
    if (x>=600-30){
        xSpeed = -xSpeed;
    } else if (x<=0+30){
        xSpeed = -xSpeed;
    }

    if (y>=600-30){
        ySpeed = -ySpeed;
    } else if (y<=0+30){
        ySpeed = -ySpeed;
    }
    x += xSpeed;
    y += ySpeed;
}