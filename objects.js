const obj={
    "full name":"Snehal Ingale",
    rollno:32419,
    div:"TE 6",
    isPass: true
}
console.log(obj);
console.log(obj["full name"]);
console.log(obj.isPass);
let newval =obj["full name"].toUpperCase();//is js this method  doesn't make changes in the original string instead it return the updated value 
console.log(newval);

//if we want that elements which is initialize should remains the same then we can go with freeze() method present is inbuilt class named as Object
//example:
obj.rollno=32416;

Object.freeze(obj);
obj.rollno=32419;
obj.rollno=32421;
obj["full name"]="soha Dikshit";
console.log(obj.rollno);//output:-32416 |- due to freeze method it freezes all the values of object
console.log(obj["full name"]);//output:- Snehal Ingale