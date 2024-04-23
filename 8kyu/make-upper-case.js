// DESCRIPTION:
// Write a function which converts the input string to uppercase.

//My solution
function makeUpperCase(str) {return str.toUpperCase();}

//Other Solution
function makeUpperCase(str) {
    return str.toLocaleUpperCase();
  }
  
//Best practices
const makeUpperCase = str => str.toUpperCase();