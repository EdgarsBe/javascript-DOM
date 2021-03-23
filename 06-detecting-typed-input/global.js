// Your JavaScript goes here.
window.addEventListener("load", function(){
    var nameField = document.getElementById("full_name");
    nameField.addEventListener("keyup", function() {
       var textField = document.getElementById("greeting");
       textField.innerHTML = ("Greetings, " + nameField.value + " !"); 
    });
});