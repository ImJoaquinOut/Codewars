//Description

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// FUNDAMENTALS

//My solution
function position(letter){
    let alphabet = '0abcdefghijklmnopqrstuvwxyz'
    return `Position of alphabet: ${alphabet.indexOf(letter)}`
  }
  
//Other solution
position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;

//Best practices
function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }