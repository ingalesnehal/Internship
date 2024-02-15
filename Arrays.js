let marks =[12,34,67,54,90];
let str=["snehal","sakshi","suraj","sonal","Dhiraj"];
console.log(marks);
console.log(marks.length);

for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}
marks[2]=32;
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}
//we can use for of loop to print the array and it doesn't need any  initialization ,condition
for(let mark of marks)
{
    console.log( "marks=",mark);
}
