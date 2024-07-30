//Description

// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'
// Fundamentals

//My solution
function combineNames(first,last){
    return `${first} ${last}`;
  }
  
//Other solution
var combineNames = function(first, last){
    return first + ' ' + last;  
  };

//Best practices
const combineNames = (...names) => names.join(' ');