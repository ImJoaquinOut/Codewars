// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

//My solution
function replace(s){
    return s.replace(/[aeiouAEIOU]/g,'!');
 }
 
//Other solution
const replace = s => s.replace(/[aeiou]/gi, '!');

//Best practices
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }