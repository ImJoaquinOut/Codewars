//Description

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"
// FUNDAMENTALSSTRINGS

//My solution
function repeatStr (n, s) {
    return s.repeat(n);
  }

//Other solution
function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}

//Best practices
function repeatStr (n, s) {
    return s.repeat(n);
  }