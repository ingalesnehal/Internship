
//forEach loop:- it is the method
//generally for each loop is use for arrays, it is use to create a loop
// in for each method functions can passed ans an parameter or we can also return any functions value.
//callbsck function:- it is a function which is passed ans a argument to another function
//syntax

// Arr.forEach(callback function(parameters){
//     //function defination 
// })

// example:-
let arr =[1,2,3,4];
arr.forEach(function print(val){
    console.log(val);
}) 
// output:-
// 1
// 2
// 3
// 4

//genrally callback function which is passed to the forEach is an Arrow Function
//forEach is only use for arrays not for string
//forEach is a higher order function


//practice Question
//for the given array of number the square of each value using the forEach loop

let arr1 =[1,2,3,4,5,6];
arr1.forEach((val)=>{
 
    console.log("square of",val,"is",val*val);
 }

)

// let arr1 =[1,2,3,4,5,6];
// arr1.forEach((val)=>{
//  for(let i=0;i<arr1.length;i++)
//  {
//    console.log("square of",arr1[i],"is",arr1[i]*arr1[i]);
//  }

// })