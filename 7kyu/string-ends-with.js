// Description
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//My solution
function solution(str, ending){
    if(str.endsWith(ending) === true) {
      return true;
    } else {
      return false;
    };
  }
  
//Other solution
const solution = (str, ending) => str.endsWith(ending);

//Best practices
function solution(str, ending){
    return str.endsWith(ending);
  }