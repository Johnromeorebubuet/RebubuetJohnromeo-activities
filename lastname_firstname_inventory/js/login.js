function checkUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;

    if (username === "user" && password === "password") {
        message.innerHTML = "Login succesfull!";
    }else{
        message.innerHTML = "Invalid username or password";
    }
}