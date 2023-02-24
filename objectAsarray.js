let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  length: 3,
  [Symbol.isConcatSpreadable]: true,
  
};

let myNew = arr.concat(arrayLike);
console.log(myNew);