let marks= [85,97,44,37,76,60];
console.log(marks);
let sum=0;
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
}

let avg=sum/marks.length;
console.log("avg of the given array is :",avg);