//functions are "object"


// Self-Invoking Functions
// Function expressions can be made "self-invoking".
// A self-invoking expression is invoked (started) automatically, without being called.
// Function expressions will execute automatically if the expression is followed by ().
// You cannot self-invoke a function declaration.
// You have to add parentheses around the function to indicate that it is a function expression:
//this function is also an anonymous self-invoking function(function without name)
//Example
(function () {
  let x = "Hello!!";  // I will invoke myself
  console.log(x);
})();

