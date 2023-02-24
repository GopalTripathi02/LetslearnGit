const myArray = ["item1", "item2", "item3" ,"item4"];
let myNewArray = myArray.concat(["item"]);
console.log(myNewArray);
// console.log(myArray);
// console.log(myArray===myNewArray);
let myArray1 = [...myArray,...myNewArray];
console.log(myArray1);