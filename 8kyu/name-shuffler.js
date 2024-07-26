//Description

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"
// STRINGSFUNDAMENTALS

//My solution
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }

//Other solution
const nameShuffler = str => str.split(' ').reverse().join(' ');

//Best practices
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }