function roman(num) {
  var output = [];
  var final = "";
  var char = num.toString();
  output.push(char.split(""));
  if (output.length == 1) {
    switch(output[0]){
      case 1:
      output[0] = "I";
      break;
      
      case 2:
      output[0] = "II";
      break;
      
      case 3:
      output[0] = "III";
      break;
      
      case 4:
      output[0] = "IV";
      
      case 5:
      output[0] = "V";
      break;
      
      case 6:
      output[0] = "VI";
      break;
      
      case 7:
      output[0] = "VII";
      break;
      
      case 8:
      output[0] = "VII";
      break;
      
      case 9:
      output[0] = "IX";
      break;
    }
    } else if (output.length == 2) {
      switch(output[0]){
      case 1:
      output[0] = "X";
      break;
      
      case 2:
      output[0] = "XX";
      break;
      
      case 3:
      output[0] = "XXX";
      break;
      
      case 4:
      output[0] = "XL";
      
      case 5:
      output[0] = "L";
      break;
      
      case 6:
      output[0] = "LX";
      break;
      
      case 7:
      output[0] = "LXX";
      break;
      
      case 8:
      output[0] = "LXXX";
      break;
      
      case 9:
      output[0] = "XC";
      break;
    }
    switch(output[1]){
      case 1:
      output[1] = "I";
      break;

      case 2:
      output[1] = "II";
      break;

      case 3:
      output[1] = "III";
      break;

      case 4:
      output[1] = "IV";
      break;
      
      case 5:
      output[1] = "V";
      break;

      case 6:
      output[1] = "VI";
      break;

      case 7:
      output[1] = "VII";
      break;

      case 8:
      output[1] = "VIII";
      break;

      case 9:
      output[1] = "IX";
      break;
    }
  } else if (output.length == 3){
      switch(output[0]){
          case 1:
          output[0] = "C";
          break;

          case 2:
          output[0] = "CC";
          break;

          case 3:
          output[0] = "CCC";
          break;

          case 4:
          output[0] = "CD";
          break;

          case 5:
          output[0] = "D";
          break;

          case 6:
          output[0] = "DC";
          break;

          case 7:
          output[0] = "DCC";
          break;

          case 8:
          output[0] = "DCCC";
          break;

          case 9:
          output[0] = "CM";
          break;
      }
      switch (output[1]){
          case 1:
          output[1] = "X";
          break;

          case 2:
          output[1] = "XX";
          break;

          case 3:
          output[1] = "XXX";
          break;

          case 4:
          output[1] = "XV";
          break;

          case 5:
          output[1] = "V";
          break;

          case 6:
          output[1] = "VX";
          break;

          case 7:
          output[1] = "VXX";
          break;

          case 8:
          output[1] = "VXXX";
          break;

          case 9:
          output[1] = "XC";
          break;
      }
      switch (output[2]) {
          case 1:
          output[2] = "I";
          break;

          case 2:
          output[2] = "II";
          break;

          case 3:
          output[2] = "III";
          break;

          case 4:
          output[2] = "IV";
          break;

          case 5:
          output[2] = "V";
          break;

          case 6:
          output[2] = "VI";
          break;

          case 7:
          output[2] = "VII";
          break;

          case 8:
          output[2] = "VIII";
          break;

          case 9:
          output[2] = "IX";
          break;
      }
  }
  for (var i = 0; i<output.length; i++) {
      final = final+output[i];
  }
  return final;
}

roman(123);