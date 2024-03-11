##Variable Declaration##

1)let
The let keyword was introduced in ES6 (2015)
Variables declared with let have Block Scope.
Variables declared with let must be Declared before use.
Variables declared with let cannot be Redeclared in the same scope.
Before ES6 (2015), JavaScript did not have Block Scope,JavaScript had Global Scope and Function Scope.
let and const is the provides block scope.
example:- let
Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here

Example:- var
Variables declared with varinside a { } block can be accessed from outside the block:
{
  var x = 2;
}
// x CAN be used here

**Difference Between var, let and const

        Scope	  Redeclare	 Reassign 	Hoisted	 Bindsthis
var     	No	    Yes	      Yes  	     Yes	     Yes
let	     Yes	    No	      Yes	       No	       No
const	   Yes	    No	       No	       No        No


Const
The const keyword was introduced in ES6 (2015)
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.

//Cannot be Reassigned
A variable defined with the const keyword cannot be reassigned:
Example:-
const PI = 3.141592653589793

JavaScript const variables must be assigned a value when they are declared:

Correct
const PI = 3.14159265359;

incorrect
const PI;
PI=3.14159265359;//error

When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

*Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp

**You can change the elements of a constant array:
Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");


**You can change the elements of a constant array:
Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
o/p:- Toyota,Volvo,BMW,Audi

**But you can NOT reassign the array:
Example
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

