//prompt the user to enter thier fullname generates a username for them based on the input start username with @ followed by thier fullname and ending with the fullname length


let fullname=prompt("enter your fullname without space");
console.log("fullname is ",fullname);
let username = "@"+fullname+fullname.length;
console.log("username = ",username);
