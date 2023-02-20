function validateEmail() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        return false;
    } else {
        return true;
    }
}

function validateForm() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var zip = document.getElementById("zip").value;
    var errorMessage = "";
  
    var validFirstName = false;
    var validLastName = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validCountry = false;
    var validZip = false;
    if (firstName.length <= 20 && firstName.length > 0) {
        validFirstName = true;
    } else {
        errorMessage += "<p>Invalid First Name</p>";
    }
   if(lastName.length <=50 && lastName.length > 0){
     validLastName = true;
   }else{
     errorMessage += "<p>Invalid Last Name</p>";
   }
  if (validateEmail()) {
        validEmail = true;
    } else {
        errorMessage += "<p>Invalid Email</p>";
    }
    if (phone.length <= 15 && phone.length > 0 && !isNaN(phone)) {
        validPhone = true;
    } else {
        errorMessage += "<p>Invalid Phone #</p>";
    }
  if (username.length <= 12 && username.length > 0) {
        validUsername = true;
    } else {
        errorMessage += "<p>Invalid Username</p>";
    }
  if(password.length <= 7 && password.length > 0){
    validPassword = true;
  } else{
    errorMessage += "<p>Invalid Password</p>";
  }
  if(address.length > 0){
    validAddress = true;
  }else {
    errorMessage += "<p>Invalid Address</p>";
  }
    if(city.length > 0){
        validCity = true;
    } else {
        errorMessage += "<p>Invalid City</p>";
    }
   if (country.length > 0) {
        validCountry = true;
  } else {
        errorMessage += "<p>Invalid Country</p>";
 }
  if (country === "USA"){
    if (zip.length <= 5 && zip.length > 0) {
  validZip = true;
    } else {
  errorMessage += "<p>Invalid Zip</p>";
  }
    }

    document.getElementById("error").innerHTML = errorMessage;
    return (validFirstName && validLastName && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validCountry && validZip);
}
