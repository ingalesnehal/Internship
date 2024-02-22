//Array :- it is the collection of similar types of elements 
           //usually we stores similar type of data in array,but different type of data can also be possible to store in js but it is not a good practice 
           //array elements are accessed by the index
           //we can update the value of array even after initialization but it in not possible in case of String because strings are immutable
           //array:-Mutable
           //String:-Immutable

         let arr=[10,20,30,40,50];
        for(let i=0;i<arr.length;i++)
        {
            console.log(arr[i]);
        }

        console.log("\n");

        //for-of loop is use to print the array  as it doesn't need any initialization, declaration, inc/dec

        for(let j of arr)
        {
            console.log(j);
        }

        console.log("\n");

        /*ARRAYS METHODS */
        //there are two types of Methods 
        //1) which make changes in the original array
        //2) which create a new array after updation

        // push():- append to end(make changes in original array)
        // Pop():- delete for end one item/element and return deleted element(make changes in original array)
        // toString():-convert array to string (it doesn't make changes in the original array)


        arr.push(15,80,78);
        
        console.log(arr);
            // [10,20,30,40,50,15,80,78]
        
 
        let delete_item = arr.pop();
        console.log(arr);//[10,20,30,40,50,15,80]
        console.log("deleted item",delete_item);//78
        console.log(typeof arr);//object
;       console.log(arr.toString());//10,20,30,40,50,15,80
        console.log(typeof arr.toString());//string
        console.log( ...arr.toString()); //...use to spread the string


        //concat():- it joins multiple arrays and returns result
        //syntax:- arr1.concat(arr2); arr2 is getting concat with arr1
        //ex:-
        let fruits=["apple","banana","lichi","grapes"];
        let veggies=["tomato","potato","onion","garlic"];
        let concatarr=fruits.concat(veggies);
        console.log(concatarr); //(8) ['apple', 'banana', 'lichi', 'grapes', 'tomato', 'potato', 'onion', 'garlic']
        console.log(fruits);  //(4) ['apple', 'banana', 'lichi', 'grapes']
        console.log(veggies);//(4) ['tomato', 'potato', 'onion', 'garlic']

        // this show that even after concatenation our original array doesn't get change means a new array get created for the concatenated array 


        //unshift():- use to add element at the start
        //arrname.unshift("element to be added at the start");

        //shift():- use to delete element from start and return deleted element
        //let updatedarr = arrname.shift(); 1st element get deleted


        //slice():- this method is use to get any part from the array
       // syntax:- Slice(startidx,endidx);

        //splice():- this method is use to change the original array (add,remove,replace)
         //let val=arr1.splice(startidx,deletecount,newelement);
        
        //ex:-
        let arr1= [1,2,3,4,5,6,6,7];
        arr1.unshift(10,11,13);
        console.log(arr1);

        let arr3= arr1.shift();
        console.log(arr3);
        
       console.log( arr1.slice(1,3));//2,3,4
       
       //add element
       arr1.splice(2,0,14);
       console.log(arr1.splice(2,0,14));

       //delete 2 elements after index 1
        console.log( arr1.splice(1,2));

       //replace element from where it was deleted
       console.log(arr1.splice(1,2,12));
       
       

        