//Question:- we are given array of marks of students. filter out of teh marks of students that scored 90+

let marks = [95,80,91,92,57,78,45,89,89.93,100,99,77];
let newArr= marks.filter((val)=>{
  return val>90;
})

console.log(newArr);//[95,91,92,100,99]


//Question2:- Take a number n as input from user.create an number from 1 to n.
//use the reduce method to calculate sum of all numbers in the array.
//use the reduce method to calculate product of all number in the array.


let n= prompt("enter the nth number ");
let arr= [];
for (let i= 1;i<=n;i++)
{
    arr[i-1]=i;
}
console.log(arr);

let sumArr= arr.reduce((previousval,currentval) => {
 return previousval+currentval;
});
console.log("sum of 1 to ",n," numbers is", sumArr);

let MulArr=arr.reduce((prev,curr)=> {
    return prev*curr;
})

console.log("multiplication of 1 to",n,"values is",MulArr);


