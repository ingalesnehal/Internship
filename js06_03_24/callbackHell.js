function myData(dataId)
{
  console.log("data",dataId);
}

myData();//data 'undefined'
myData(1);//data 1
//if we want the data from id 1 to id 4 after every 2 sec per id should be displayed
//for that we use calback

function myData1(dataId,nextDataId)
{  //setTimeout() providesdelay of 2sec to the content written in the arrow function
    setTimeout(()=>{
   console.log("data",dataId);
   if(nextDataId)
   {
    nextDataId();
   }  
},2000);
}

//callback Hell
myData1(1,()=>{
    myData1(2,()=>{
      myData1(3,()=>{
        myData1(4);
        });
      })
    })
//above callback get more complicated due to nesting and therefore problem of callback hel occured
//for to resolve this promblem promises comes on picture