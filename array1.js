// let fruits = ["apple", "mango", "oranges" ];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2,3, "string", null, undefined];
// console.log(fruits);
// // console.log(fruits[2]);
// // console.log(numbers);
// console.log(mixed);
let obj = {};
let fruits = ["apple", "mango", "oranges" ];
fruits[1] = `banana`;
console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits)); // we use Array.isArray for checking the type of array
console.log(Array.isArray(obj)); // object is literal object

