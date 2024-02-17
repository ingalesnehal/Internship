//type




//most of the times, operator converts operator and functions automatically convert the vales to them to right type
//alert automatically comverts any values to the string to show it where as mathematical operations converts values to the number
//there are many cases when we need to explicityly convert a value to the expected type

//#####String conversion######

//we use 'String(value)' function to convert a value to a string 

//ex1:-
//     let value = true;
//     console.log(typeof value);//boolean
//  //this 'typeof' is use to get the data type of any variable
//     value=String(value);
//     console.log(typeof value);//string

// ex2:-
//    let value = 256;
//    console.log(typeof value);//number
//    value = String(value);
//    console.log(typeof value);//string

//##### Number conversion #####
//Number conversions in the mathematical functions and expressions happens automatically

//for example
//suppose a division / is applied to non-number value 

//   console.log("6"/"2");// 3 i where it is a number and the operations is performed betwwen to strings

//also we can use Number(value) function to explicitly convert a value to a number
 


//ex3:
//   let str1="123";
//   console.log(typeof str1 );
//   let num =Number(str1);//become a numm=ber 123
//   console.log(typeof num);

  //lets check for boolean value that is it get converted to number

  //ex4:-
//   let str = true;
//   console.log( typeof str);
//   str = Number(str);
//   console.log(typeof str);
//   console.log(str);



  //Explicit conversions is usually required when we expect a numberic value to be entered by the user but he enters string so it get explicitly converted to number 

  //*   if a string is not a valid number the the result of it is NAN

  //ex5:-
//   let str =  Number("the given string is nit a number");
//   console.log(str); //NaN

//note:- the null and undefined  is completely different
//       null becomes zero where the undefined becomes NaN


//boolean Conversion
//boolean conversions is the simplest one 
//it happens in logical operations but can also be performed explicitly with a call to Boolean(value)

//the conversion rule

// value                            becomes...
// 0,null,undefined,NaN," "  ------->false
// any other value       ----------->true

// console.log(Boolean(0));
// console.log(Boolean(1));

// console.log(Boolean("hello"));
// console.log(Boolean(undefined));//false
// console.log(Boolean(NaN));//false
// console.log(Boolean(10));//true
console.log(Boolean(""));//true
console.log(Boolean(" ") );//whitespace is also a character in js therefore it prints/gives true value


