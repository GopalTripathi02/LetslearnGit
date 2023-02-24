let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)


// let user = "John";

// alert(user ?? "Anonymous"); // John (user is not null/undefined)
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// lets take another example using nullish operator

height1 = null;
width =null;
area = (height1 ?? 500) * (width ?? 10); // the nullish operatorwill always return defined and truly value
console.log(area)