//functionDeclaration

//a function defined a function that will be executed when it is invoked
//example:-
function function_name()
{
 //function body
}

//Function Expressions:-(anonymous Function):- a function without name
//A function expression is similar to a function declaration,with the difference that it can be stored in a variable
//as soon as the function is defined with an expression,it is invoked

//example:-
//const fun= function()
//{
  //body
//}


//Differences

//1) Hoisting:-
//function declaration are similar to var;they will be automatically hoisted, whereas function expressions will not be hoisted
//in simple terms,function declarations will load before any other code and funtion expression will load when the intepreter reaches it.
//example:-

//function using function declaration
  shot();
  function shot()
  {
    console.log("function Declaration");//generated output without error even though we had called the function before declaration due to hoisting
  }


  //function using function expression
 //line 1->shot();
          const shot=function()
          {
            console.log("function exprssion");
          }
         shot();

         //line one will generate an error as can't access shot before initialization
         //after commenting line1 ,code will run fine , output:-function expression


/* The Function() Constructor
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
Functions can also be defined with a built-in JavaScript function constructor called Function().
*/
//Example
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);