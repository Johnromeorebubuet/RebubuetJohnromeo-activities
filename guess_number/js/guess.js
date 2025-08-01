function checkNumber() {
    const num = document.getElementById('guess').value;
    
    if(num == random) {
        document.getElementById('message').innerHTML = "correct";
    }
    else if(num < random) {
        document.getElementById('message').innerHTML = "Higher"
    }
    else if(num > random) {
        document.getElementById('message').innerHTML = "Lower";
    }
}