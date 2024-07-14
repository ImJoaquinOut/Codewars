//Description

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// FUNDAMENTALSMATHEMATICSGEOMETRY

//My solution
function squareArea(A){
    return +Math.pow(2*A/Math.PI, 2).toFixed(2);
  }
  
//Other solution
squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);

//Best practices
function squareArea(A){
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area*100)/100
  }