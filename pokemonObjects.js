function Pokemon(Name,Type,HP,Defense,Attack,Legendary) {
    this.Name = Name;
    this.Type = Type;
    this.HP = HP;
    this.Defense = Defense;
    this.Attack = Attack;
    this.Legendary = Legendary
};

var arceus = new Pokemon("Archeus", "Normal", 120, 120, 120,true);
var mew = new Pokemon("Mew", "Psychic", 100, 100, 100, true);
var mewtwo = new Pokemon("Mewtwo", "Psychic", 106, 90, 110, true);
var charizard = new Pokemon("Charizard", ["Fire, Flying"], 78, 78, 84, false);
var raichu = new Pokemon("Raichu", "Electric", 60, 55, 90, false);
var venusaur = new Pokemon("Venusaur", ["Grass", "Poison"], 80, 83, 82, false);
var roster = [arceus, mew, mewtwo, charizard, raichu, venusaur]

function printRoster() {
    for (var i=0; i<roster.length; i++){
        console.log(roster[i]);
    }
}
//printRoster();

function pokemonAttacked(){
    for (var i=0; i<roster.length; i++){
        roster[i].HP -= 10;
    }
    printRoster();
}
pokemonAttacked();