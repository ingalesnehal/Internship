//JavaScript Function Parameters

//Function parameters :- they are the names listed in the function definition.
//Function arguments :-they are the real values passed to (and received by) the function.

//Parameter Rules

//1)JavaScript function definitions do not specify data types for parameters.
   example:-
    function (age,name)
    {
        console.log(age,name);//
    }
    (12,"soha");//this anonymous functions gives output coz it is call immediately after declaration ,if we haven't called it immedieately then it gives error 
    


//2)JavaScript functions do not perform type checking on the passed arguments.
    function solo(age, name)
    {
    console.log(age,name);
    }

    solo(18,29);//even though name should be a string value but if we passed any number it will not check its type but it is bad type of programming

//3)JavaScript functions do not check the number of arguments received.
    //example:-
    function solo(age, name)
    {
    console.log(age,name);
    }

    solo(18,"snehal",29);


 //Function Rest Parameter
 
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

//Example
function sum(...args) {  
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

