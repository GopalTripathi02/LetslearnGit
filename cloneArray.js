// how to clone Array
// how to concatenate two arrays

let array1 = ["item1","item2"];
// let array2 = ["item1","item2"]; // first method to clone and make new array with new addresss but not good
// let array2 = [].concat(array1); // second method to clone the array

// let array2 = array1.slice(0);

// new way of cloning array using SPREAD OPERATOR
// let array2 = array1.slice(0).concat(["item4","item3"]); // accurate method
// let array2 = [...array1, "item3", "item4"]; // to add extra item to array
let oneMoreArray = ["item3" , "item4"];
// let array2 = [].concat(array1,["item5", "item6"]);
let array2 = [...array1,...oneMoreArray];
console.log(array1===array2);
console.log(array1);
console.log(array2);
console.log(oneMoreArray);