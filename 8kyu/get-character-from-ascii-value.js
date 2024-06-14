//Description

// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/

// FUNDAMENTALS

//My solution
function getChar(c) {
    return String.fromCharCode(c)
  }

//Other solution
var getChar = c => String.fromCharCode(c);

//Best practices
const getChar = String.fromCharCode;