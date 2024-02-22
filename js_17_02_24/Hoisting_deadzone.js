//hoisted :-top

//let &const :- this are in the temporary dead zone for the timebeing.
//temporary dead zone :-it is the time between the declaration/hoisting and initialize some value 
//ex1:-
console.log(a); //error:- ReferenceError ReferenceError: Cannot access 'a' before initialization
let a=10;
var b=100;

//so here anything before line 6 was the temporary dead zone for a, as a got initial at line 6

//hoisting:- in hoisting the intepreter appears to move the function and variable declarations to the top of the cond before execution
//note:- js only hoist the declaration not intialization

//Hoisting

console.log(b);

var b =10;

// JS first scan the entire code and alocates the space for the variables declarations and function declarations

// and then execute the code from top to bottom so as in line 16 we use console.log and as the variable had stored but not yet initialize the it will show 'undefined' just for "var"  util the 18 line get executed as b get initialize in line 18


//Temporal Dead zone :- let & const
//A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized. While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError.

