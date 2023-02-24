let userName =prompt("who is there?", '');
if (userName === 'Admin'){
    let pass = prompt('Password', '');
    if (pass === 'TheMaster'){
        alert('welcome!')
    } else if (pass === '' || pass === null){
        alert('cancelled');
    } else{ ("wrong password")
    }
}
else if (userName === '' || userName === null) {
    alert( 'Canceled' );
  } else {
    alert( "I don't know you" );
  }