//Create function using "function" keyword that takes string as an argument and returns the number of vowels from the string

// function vowelCount(str)
// {   let count=0;
//     for(let i=0;i<str.length;i++)
//     {    
//         if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U")
//         {
//             count++;
//         }
//     }
//     console.log("number of vowels in the given string is ",count);
// }

// vowelCount("i an from pict college"); 


//create the Arrow Function for the sam task as above
let count=0;
const Arrowfun = (str)=>
{
    
    for(let i=0;i<str.length;i++)
    {    
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U")
        {
            count++;
        }
    }
    
}

vowelcount=Arrowfun("snehal Ingale is now 21 years old");

console.log("vowel in the string",count);