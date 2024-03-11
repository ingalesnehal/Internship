//Arrow Function
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:
// syntax
// variable = ((parameters)=>
//   {
//     function Body
//   })
//example:-
arr=(()=> console.log("hello!!"))
arr();

//perform the operation of suming the values passed by the arr

// arr=[1,2,3,4,5,6,7,8,9];
// solo=arr.() => { return val+=val;}

//sum operations
//function Declaration
 function sum( a , b )
{
     return (a+b);
}
Sum=sum(2,4);
console.log("sum of a and b is",Sum);
          

//function expression                                                                  
mul=function( a , b )
{                                                                 
     a*=b;                                                         
     console.log("multiplication of a and b:-",a);
} 
mul(2,4);                                                          


function sum1( a , b )
{
     a+=b;
     console.log("sum of a and b is",a);
} 
sum1(12,24);

   
//Arrow function:-
// if the function contains only a single statement or the expression then we can even reomove the braces{}and the return keyword 

hello=()=>"hello moto";
console.log(hello);//output:-[Function: hello]

//we can also pass the parameter to the function
//example
hey=(val)=>{
    return val+1;
}

// let value=prompt("enter the value for val");//using html, see output on browser
let value=14;
console.log(hey(value));


//for to execute the arrow function we need to store it in the variable .
//if we write just and arrow function without assigning it to the variable , then as such it will not get execute
//example:-
// ()=>{
     //statement
// }
//by writing  onlt function variable name we get the value store in that variable so here the function is store in variable so we get function defination after writing "consol.log(variableName)" 




































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































