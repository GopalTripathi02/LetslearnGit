// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }

function isEvenOdd(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
num = prompt("Enter number", 2)
if (isEvenOdd(num)) {
    console.log("even number")
} else {
    console.log("odd number")
}