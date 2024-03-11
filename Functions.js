
//if a function is call called and arguments are passed the we get this type of result as shown below

function example(age,name)
{
    console.log(age,"\n",name);
    console.log("type of age is",typeof age,"\n","type of name is",typeof name);
}
example(21,"Snehal");

//if a function is called, but an argument is not provided then the corresponding value becomes "undefined"
//ex:-
 
function example1(age,name)
{
    console.log(age,"\n",name);//undefined 
    console.log("type of age is",typeof age,"\n","type of name is",typeof name);//undefined 
}
example1();

// undefined types :- it means that only a variable is declared but not yet initialize.
//if within a function we had written two arguments and while calling that function we passed only one parameter still it will show for the second parameter undefined.
//for example :-
 
function example3(age,name)
{
    console.log(age,name);// 18 undefined 
    console.log("type of age is",typeof age,"\n","type of name is",typeof name);// type of age is number, type of name is undefined
}
example3(18);

//we can write a default value in the parameter section so that if the parameter had not paased while calling the function ther it we use the default value as a result.

//ex:-
function example4(age,name="sayi")
{
   console.log(age,name);
} 
example4(20);// output:-20 sayi
example4(20,"Rahi");// output:-20 Rahi




