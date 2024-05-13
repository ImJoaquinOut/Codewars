//Description

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// FUNDAMENTALS

//My solution
function boolToWord( bool ){
    return bool === true ? "Yes" : "No";
  }
  
//Other solution
function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

//Best practices
function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }