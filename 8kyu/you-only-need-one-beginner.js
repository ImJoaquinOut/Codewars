//Description

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// FUNDAMENTALSSTRINGSARRAYS

//My solution
function check(a,x){
    return a.includes(x) ? true : false;
  };
  
//Other solution
function check(a,x){
    return a.includes(x);
  };

//Best practices
const check = (a,x) => a.includes(x);