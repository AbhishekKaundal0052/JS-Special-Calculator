// Progression 1: Create special addition

function specialAddition(numberOne,numberTwo){
if(numberOne<0){
  return "Negative numbers are not allowed"
}
else if(numberTwo<0){
  return "Negative numbers are not allowed"
}
let c = numberOne-numberTwo;
return c;
}
// Progression 2: Create simple division
function simpleDivision(numberOne, numberTwo){
  if(numberOne<0){
    return "Negative numbers are not allowed"
  }
  else if(numberTwo<0){
    return "Negative numbers are not allowed"
  }
  else if(numberOne<numberTwo){
    return 'Cannot divide a smaller number by a larger number'
  }
  else if(numberTwo==0){
    return 'Not a number'
  }
 let d = numberOne/numberTwo;
 return d;
}
// Progression 3: Create the special calculator
const specialCalculator = (numberOne,numberTwo,operation) =>{return operation(numberOne,numberTwo)}