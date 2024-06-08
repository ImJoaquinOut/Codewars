//Description

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// FUNDAMENTALS

//My solution
function problem(x){
    return x === x.toString() ? "Error" : x*50+6;
  }
  
//Other solution
function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
  }

//Best practices
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;