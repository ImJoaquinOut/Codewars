//Description

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"

//My solution
function race(v1, v2, g) {
    if (v1 >= v2){
      return null;
    }
  
  let covered1 = g, covered2 = 0
  let timeInSeconds = 0;
  
  const speedPerSecond1 = v1 / 3600;
  const speedPerSecond2 = v2 / 3600;
  
  while (covered1 >= covered2){
    covered1 += speedPerSecond1;
    covered2 += speedPerSecond2;
    
    if(covered1 >= covered2) timeInSeconds++;
  }
  
  return [
    Math.floor(timeInSeconds / 3600),
    Math.floor(timeInSeconds / 60) % 60,
    timeInSeconds % 60,
  ];
}

//Other solution
function race(v1, v2, g) {
    if (v2 < v1) { return null; }
    
    var seconds = Math.floor(g / (v2 - v1) * 3600);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds - h * 3600) / 60);
    var s = seconds - h * 3600 - m * 60;
    
    return [h, m, s];
  }

//Best practices
function race(v1, v2, g){
    let time=g/(v2-v1);
    return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
  }