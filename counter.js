var age = 0;
var input1 = 0;
var input2 = 0;
function start() {
    age = prompt("Enter your age"); // Save the input in the global 'age' variable
    agecheck(age); // Pass the age variable to agecheck function
}

function agecheck(lol) {
    if (lol < 18) {
        alert("I'm sorry, you are too young");
        document.getElementById("agedisplay").innerHTML = lol
    } else {
        alert("All good, im just messing with you");
        document.getElementById("agedisplay").innerHTML = lol
    }
    question1()
}
function question1(){
    document.getElementById("chat").innerHTML="Hello";
    document.getElementById("hiddenInput").style.display = "";
    document.getElementById("hiddenInput2").style.display = "";
}
function count(){
    var inputField = event.target
    if (inputField.id == "hiddenInput"){
        input1 = parseInt(document.getElementById("hiddenInput").value)
    }
    else if (inputField.id == "hiddenInput2"){
        input2 = parseInt(document.getElementById("hiddenInput2").value)
    }
    inbetween()
}
function inbetween(){
    if (input1>input2){
        document.getElementById("second number needs to be bigger")
    }
    else if (input1<input2){
        document.getElementById("chat").innerHTML = ""
        for (i = input1; i <= input2; i++){
            document.getElementById("chat").innerHTML += i + " "
        }
    }
    else{
            document.getElementById("chat").innerHTML = "0"
    }
}
