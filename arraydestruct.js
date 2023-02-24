const myArray = ["value1", "value2", "value3", "value4"];
// let myArray1 = myArray[0];
// let myArray2 = myArray[1];
// console.log("the value of myArray :",myArray);
// console.log("the value of myArray1 :",myArray1);
// console.log("the value of myArray2 :",myArray2);

// to reduce this task array destructuring provide us a method to complete this task within a line

let [myArray1,myArray2,...myNewArray] = myArray; // array destructuring method
// let myNewArray = myArray.slice(2); // we can do it with slice method of array for assigning any perticular index
console.log("the value of myArray1 :", myArray1);
console.log("the value of myArray2 :", myArray2);
console.log("the value of myArray :", myNewArray);
