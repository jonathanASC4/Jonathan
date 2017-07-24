function Superhero (realName,superpower,justice,height,health) {
    this.realName = realName;
    this.superpower = superpower;
    this.justice = justice;
    this.height = height;
    this.health = health
}

var superman = new Superhero ("Clark Kent", "flying", true, "6' 3", 100);
var batman = new Superhero ("Bruce Wayne", "Rich boy", true, "6' 2", 100)
var wonderWoman = new Superhero ("Diana Prince","Amazon", true, "5' 11", 100)

console.log(batman.superpower);

this.fight = function() {
    var num = Math.floor(Math.random()*100);
    this.health -=num;
}
//var arceus = {
//    "HP" : 120,
//    "Type" : "Normal",
//    "Legendary" : true
//};
//
//
//console.log(arceus);
//function Superhero(realName){
//    this.realName = realName;
//}