//Description

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
// FUNDAMENTALSSTRINGS

//My solution
function remove (string) {
    let arr = string.split('')
    if(arr[arr.length - 1].includes('!')){
      arr.pop()
    }return arr.join('')
  }
  
//Other solution
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }

//Best practices
const remove = s => s.replace(/!$/, '');