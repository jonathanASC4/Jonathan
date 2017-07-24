function rand(num){
    return Math.floor(Math.random()*num)
}

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

function randLetter(){
    return alphabet[Math.floor(Math.random()*26)];
}
/*randLetter();

function randWord(){
    for(var i=0; i<randNum(15)); i++){
        console.log(alphabet[Math.floor(Math.random()*26)]);
    }
}
randWord();

function randWord(){
    var word = '';
    var length = 1 + rand(15);
}
*/
