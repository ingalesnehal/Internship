//promise is eventually/after a log delay completion of  task .it is object in js

let promise = new Promise((resolve,reject)=>{
    console.log("I am promised");
    //reject("some error occured");
    resolve("123");
})

