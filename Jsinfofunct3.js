function fullName(fname = "Gopal", lname = "tripathi"){
    let a = "hello " + fname + " * " + lname;
    return a;
}
let fn = fullName("ram","singh");
console.log(fn)

//function2

function Percentage(num1,num2){
    let Total = num1 / num2;
    return Total;
}

let sumofTwo = Percentage(100,40);
console.log(sumofTwo)