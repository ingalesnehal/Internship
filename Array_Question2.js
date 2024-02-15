// //for a given array with price of  5 items->[250,645,300,900,50] all items have an offer of 10% off an item.change the array to store final price after appling offer

let items =[250,645,300,900,50];
console.log(items);
let discountval;
for(let i=0;i<items.length;i++)
{
    discountval = (items[i]/10);
    items[i]=items[i]-discountval;
}

//print the discount array of 5 items
for(let disval of items)
{
    console.log("the 10% off discount on the 5 items are :",disval);
}



//not working
//take the mrp price from the user of all the items he/she wants top but, and apply  30% off on per item .change the array to store final price after appling offer

// let items_before_discount = prompt("enter the prices of all the items you want to buy");

// console.log(items_before_discount);

// let discount_val;
// for(let i=0;i<items_before_discount.length;i++)
// {
//     discunt_val = (items_before_discount/3);
//     items_before_discount[i] =items_before_discount[i]-discount_val;
// }

// for(let items of items_before_discount)
// {
//     console.log("the discount as per 30 % on per product which the customer had buyied is", items);
// }