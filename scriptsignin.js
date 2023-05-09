var Email1=document.getElementById("Email1");
var errorEmail=document.getElementById("errorEmail");
var pass=document.getElementById("Password1");
var errorPass=document.getElementById("errorPass"); 
var str=document.getElementById("strength"); 

//regex
let regexEmail=/^([A-Za-z0-9\_#.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
let regexPass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


//function to validate email
function emailValidate(){
    if(regexEmail.test(Email1.value)){
            errorEmail.innerText="Valid format";
            errorEmail.style.color="green";
            return true;
    }
}
//function to validate password
function passValidate(){
    if(regexPass.test(pass.value)){
            errorPass.innerText="Valid format";
            errorPass.style.color="green";
        
                if(pass.value.length<9){
                    str.innerText="Password is weak";
                    str.style.color="red";
                }
                else if(pass.value.length<10){
                    str.innerText="Password is average";
                    str.style.color="orange";
                }
                else {
                    str.innerText="Password is strong";
                    str.style.color="green";
                }
            return true;
    }
}

function validateForm() {
    str.innerText='';
    var isValid = true;
      
    // Validate email field
    if (!emailValidate()) {
      errorEmail.innerText = "Please enter a valid email address.";
      errorEmail.style.color="red";
      isValid = false;
    }
  
    // Validate password field
    if (!passValidate()) {
      errorPass.innerText = "Please enter a valid password.";
      errorPass.style.color="red";
      isValid = false;
    }
  
    // Display error message and prevent form submission if validation failed
    if (!isValid) {
      return false;
    }
  
    // If all validation passed, allow form submission
    return true;
  }
  