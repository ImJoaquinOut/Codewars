//Description

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// ARRAYSFUNDAMENTALS

//My solution
function sumOfDifferences(arr) {
    let total = 0
    for(let i = 0; i < arr.length - 1; i++){
      arr.sort((a, b) => b - a)
      total += arr[i] - arr[i + 1]
    }return total
  }
  
//Other solution
const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);

//Best practices
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}