var a = ['4','5','6','7','8'];
var b = ['1','2','3','4','5'];

function sumArr(a,b) {
  var sum = [];
  for(var i = 0; i < a.length; i++){
     sum.push((Number(a[i]) + Number(b[i])).toString());
  }
  return sum;
}