//variable  Declaration
//let:- it in use within the block only
//var:- can we use within the function scope any where irrespective of where it is declare in the function

// function start()
// {
//     console.log(solo);
//     //var solo;//undifined
//     var solo=12;
// }
// start();


//the result of above code is undefined , as js first fully scan the varibles and then excute the code then if we first write the console.log and the delcare a variable using var then an it in not initialize yet therefore it will show undefined

//let's use let keyword to declare the variable

// function start()
// {
//     console.log(solo);
//     //var solo;//undifined
//     let solo=12;
// }

// start();//error can't accces solo before initialization

//const keyword just work like li=et but the only diffeence is that the value of variable declare with let can we changeable/updateable but in case of const we can only assign value once during declaration it can't we updated once declared.

// const age=14 ;
// console.log(age);//14
// age =18;
// console.log(age);//error :- assignment to constant variable