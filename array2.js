/*
methods in arrays
1. array push pop
2. array shift unshift
*/
let fruits = ["apple", "mango", "oranges" ];
console.log(fruits);
// fruits.push("banana");
// // console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits); // apple mango
// let poppedFruit = fruits.pop(); //mango
// console.log(fruits);//apple
// console.log(poppedFruit);// mango

// fruits.unshift("banana" , "pine"); // unshift is used to add the elements in the starting of array
// console.log(fruits);
// fruits.shift("grapes")
// console.log(fruits);


let removedFruit = fruits.shift(); // shift method is used to remove the first element from array
console.log(`removed fruit is ${removedFruit}`);

