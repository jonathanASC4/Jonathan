var order1 = {
    topping1: "pepperoni",
    topping2: "anchovies",
    topping3: "mushrooms",
    topping4: "pineapples",
    topping5: ""

function bonelessPizzaOrder(order) {
  for (i=0; i<order1.length; i++){
    if (order1[i] == ""){
      order1.splice(2, i);
    }
  }
  for (i=0; i<bonelessPizzaOrder.length; i++){
    order1[i] = "1. " + order1[i];
  }
  return "A boneless pizza with " + order1;  
}

