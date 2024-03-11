//sequence of the execution of the function depends on the function call not in the order in which it is declared
function myFirst() {
    console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  
  myFirst();
  mySecond();

//output:- Hello
//         Goodbye

  mySecond();
  myFirst();

// output:- Goodbye
//          Hello

//if i want to perform the operations of calculator and also wants to display the result of it then i can do one thing that  i can write a code for calculator and call the display function in it to display the result or vise versa
//example:-


function calculator(a,b){
    return a+=b;
     
    }
 function display(result)
 {
     console.log(result);//6
 }
 let result = calculator(4,2);
 display(result);
 
 
 //the problem with the traditional method of  is that we need to call two functions for to display the result
  
    function display1(result)
    {
     console.log(result);
    }

    function calculator1(a,b){
     a+=b;
     display1(a);
    }

    calculator1(4,2);


//second problem is the above function is that we can't stop the calculator function from displaying the result

//therefore callback comes in existance


//callback:-it is the function which is pass as the parameter to another function


function display2(result)
{
    console.log(result);
}

function myCalculator(num1,num2,myCallback)
{
    num1+=num2;
    myCallback(num1);
}

myCalculator(5,8,display);