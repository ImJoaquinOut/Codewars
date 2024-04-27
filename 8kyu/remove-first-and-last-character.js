// Description

// It's pretty straightforward. Your goal is to create a function that removes 
//the first and last characters of a string. You're given one parameter, the original string. 
//You don't have to worry about strings with less than two characters.

//My solution
function removeChar(str){
    return str.slice(1, str.length - 1);
  };
  
//Other solution
const removeChar = str => str.slice(1,-1)

//Best practices
function removeChar(str) {
    return str.slice(1, -1);
  }