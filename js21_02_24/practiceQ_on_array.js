//Question:- Create an array to store companies ->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//a) Remove the first company from thr array
//b) Remove Uber&Add Ola in its place
//c) Add Amazon at the end


let companies= ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
console.log(...companies);

//a) Remove the first company from thr array
let arr= companies.shift();
console.log("Removed companies is :",arr);
console.log("updated array is :");
console.log(companies);

//b) Remove Uber&Add Ola in its place
let i=0
for(i=0;i<companies.length;i++)
{
    if(companies[i]=="Uber") 