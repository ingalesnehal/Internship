console.log("hello");
let s=20; 
console.log("value in s is"+s );
let name="snehal ingale";
let isfollow = true;
let cgpa= 9.5;
let marks = BigInt("1234");
//in browser if we want to know the type of the variable we can use "typeof variablename"

const student ={
    fullName:"SnehalIngale",
    age:21,
    cgpa:8.2,
    isPass:true,
    class:"TE-6"
};
console.log("value of fullName key before changing is "+student.fullName);
//if we what to change values of the key then we have to types 
//object.keyanme;
//object["keyname"];

//lets try to change the value of the full name
student["fullName"]="Sakshi Kolhe";
console.log("value of fullName key after changing is "+student.fullName);