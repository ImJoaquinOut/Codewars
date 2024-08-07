//Description

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// FUNDAMENTALS
// Suggest kata description edits

//My solution
function noBoringZeros(n) {
    let arr = n.toString().split("");
    while(arr[arr.length - 1] === "0"){
      arr.pop();
    }
    return +arr.join("");
  }
  
//Other solution
function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
  }

//Best practices
function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }