//Description

// Complete the function which converts hex number (given as a string) to a decimal number.

// FUNDAMENTALS

//My solution
function hexToDec(hexString){
    return  parseInt(hexString, 16);
   }

//Other solution
const hexToDec = h => parseInt(h, 16);

//Best practices
function hexToDec(hexString){
 return  parseInt(hexString, 16);
}