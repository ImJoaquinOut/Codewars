//Description

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// MATHEMATICSFUNDAMENTALS

//My solution
function powersOfTwo(n){
    let pow = [];
    for (let i = 0; i <= n; i++) {
        pow.push(Math.pow(2, i));
    }
    return pow;
}

//Other solution
function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }

//Best practices
function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }