//Description

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//My solution
function solution(string) {
    let newStr = ''
    for (letter of string) {
      if(letter === letter.toUpperCase()) {
        newStr += ' '
        newStr += letter
      } else {
        newStr += letter
      }
    }
  return newStr
}

//Other solution
function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }

//Best practices
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }