//Description

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// FUNDAMENTALS

//My solution
function include(arr, item){
    return arr.includes(item) ? true : false;
  }
  
//Other solution
const include = (arr, item) => arr.includes(item);

//Best practices
function include(arr, item){
    return arr.includes(item);
  }