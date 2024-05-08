//Description

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//My solution
function XO(str) {
    let xvalue = str.toLowerCase().split("").reduce((a, c) => a + (c === "x"), 0)
    let ovalue = str.toLowerCase().split("").reduce((a, c) => a + (c === "o"), 0)
    if(xvalue === ovalue){
      return true
    }else{
      return false
    }
  
  }

//Other solution
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

//Best practices
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }