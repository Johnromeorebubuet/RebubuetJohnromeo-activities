function oddeven() {
    const num = document.getElementById('num').value;
    if (num % 2 ){
        document.getElementById('message').innerHTML = "odd";
    }
    else{
        document.getElementById('message').innerHTML = "even";
    }
}
