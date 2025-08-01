function checkAge(){
const age = document.getElementById('age').value;

//12 and below = "child"
//13 to 19 = "teen"
//20 to 59 = "adult"
//60 and above = "senior Citizen"

if(age <= 12) {
    document.getElementById('message').innerHTML = "Child";
}
else if(age ==13){
    document.getElementById('message').innerHTML = "teen";
}
else if(age <=19){
    document.getElementById('message').innerHTML = "teen";
}
else if(age == 20){
    document.getElementById('message').innerHTML = "adult";
}
else if(age <= 59){
    document.getElementById('message').innerHTML = "adult";
}
else {
    document.getElementById('message').innerHTML = "senior citizen";

}
}