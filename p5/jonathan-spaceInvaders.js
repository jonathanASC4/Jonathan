function setup(){
    createCanvas(800,600);
    
}

var bullet1;
var x = 400;
var motion = 550;
function Enemy(hateX, hateY){
    this.hateX = hateX;
    this.hateY = hateY
}

var enemy1 = new Enemy(50, 50);
var enemy2 = new Enemy(137.5, 50);
var enemy3 = new Enemy(225, 50);
var enemy4 = new Enemy(312.5, 50);
var enemy5 = new Enemy(400, 50);
var enemy6 = new Enemy(487.5, 50);
var enemy7 = new Enemy(575, 50);
var enemy8 = new Enemy(662.5, 50);
var enemy9 = new Enemy(750, 50);

function Bullet(shootX, shootY){
    this.shootX = shootX;
    this.shootY = shootY
}

function keyPressed() {
    if (keyCode == 32){
        bullet1 = new Bullet(x, 550);

    }
}

function draw(){
    stroke("white");
    fill("white");
    background(0);
    triangle(x-10, 550, x, 530, x+10, 550);

    ellipse(enemy1.hateX, enemy1.hateY, 50, 50);
    ellipse(enemy2.hateX, enemy2.hateY, 50, 50);
    ellipse(enemy3.hateX, enemy3.hateY, 50, 50);
    ellipse(enemy4.hateX, enemy3.hateY, 50, 50);
    ellipse(enemy5.hateX, enemy5.hateY, 50, 50);
    ellipse(enemy6.hateX, enemy6.hateY, 50, 50);
    ellipse(enemy7.hateX, enemy7.hateY, 50, 50);
    ellipse(enemy8.hateX, enemy8.hateY, 50, 50);
    ellipse(enemy9.hateX, enemy9.hateY, 50, 50);

    if (keyIsDown(LEFT_ARROW) && x>10){
        x -= 10;
    }

    if (keyIsDown(RIGHT_ARROW) && x<790){
        x += 10;
    }
    
    if (typeof bullet1 !== 'undefined'){
        fill("white");
        ellipse(bullet1.shootX, bullet1.shootY, 5, 5);
        bullet1.shootY -= 10;

    }
}