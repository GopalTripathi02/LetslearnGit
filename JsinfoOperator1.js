let a1 = (3+4,5+1);
console.log(a1) // here wecan see that rightmost values after comma is evaluated first

let marks = 1;
console.log(marks++) // marks prior value is printed first 
let markss = 1;
console.log(++markss)  // + is prioritized first in this case

// task

let a = 1, b = 1;

let c = ++a;
let d = b++;
console.log(c)
console.log(d)