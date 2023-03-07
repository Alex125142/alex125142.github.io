function name(){
	
   var validName=false;
   var name = document.getElementById("Name").value;
   var errorMessages = "";
   if (name==="null" || name==="") {
       errorMessages += "<p>The first name is required.</p>";
       } else if (name.match("^[a-zA-Z ,.'-]+$")===null) {
           errorMessages += "<p>First name has invalid characters</p>";
       } else {
               validName = true;
       };
   document.getElementById("errorMessage").innerHTML = errorMessages;
   return (validName);
}

function email(){
var validUsername=false;
var userEmail = document.getElementById("Email").value;
var errorMessages = "";
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
   errorMessages += "<p>Invalid email.</p>";
} else
   return true;
 document.getElementById("errorMessage").innerHTML = errorMessages;
 }

function comments(){
var validComments=false;
var comments = document.getElementById("Comments").value;
var errorMessages = "";
if (comments==="null" || comments==="") {
       errorMessages += "<p>Comments are required.</p>";
        }
		else {
               return true
       }
document.getElementById("errorMessage").innerHTML = errorMessages;
}


function validateForm() {
 if (!name() || !email() || !comments() || !test()) 
 {
   return errorMessages.length === 0;
 }
 else
   return false;
}
