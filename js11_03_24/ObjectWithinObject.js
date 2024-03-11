//object can contains this following types :- Number,String,Boolean,Symbol,Array,Function ,Object
const Std1={
    name: "Snehal Ingale",
    div: "TE 6",
    rollno: "32418",
     Std2:{
        name: "Dhiraj Ingale",
        div: "TE 8",
        rollno: "42418",
        arr : [1,2,3,4,5],
        //function
         solo: function(){
            console.log("i am a function which is inside the object");
        }
    } 
}
console.log(...Std1.Std2.arr);//1 2 3 4 5
Std1.Std2.solo();//i am a function which is inside the object
console.log(Std1.name);//Snehal Ingale
console.log(Std1.Std2.name);//Dhiraj Ingale

Std1.Std2.name= "Suraj paradkar";
console.log(Std1.Std2.name);//output:-Suraj paradkar --value of key name of  inner object get changed  to Suraj paradkar
//checking whether the elements belong to the object or not use '?'
console.log(Std1.Std2 ?.name);//Suraj paradkar
