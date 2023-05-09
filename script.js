var phno=document.getElementById("Phno");
var errorphno=document.getElementById("errorPhno");
var Email1=document.getElementById("Email1");
var errorEmail=document.getElementById("errorEmail");
var pass=document.getElementById("Password1");
var errorPass=document.getElementById("errorPass"); 
var str=document.getElementById("strength"); 


let regexphno=/^(\d{10}|\d{3}[.]\d{3}[.]\d{4}|\d{3}[-]\d{3}[-]\d{4}|\d{3} \d{3} \d{4})$/
let regexEmail=/^([A-Za-z0-9\_#.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
let regexPass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


function phnoValidate(){
    if(regexphno.test(phno.value)){
            errorphno.innerText="Valid format";
            errorphno.style.color="green";   
            return true;
    }
    else{
            errorphno.innerText="Enter 10 digit number in valid format";
            errorphno.style.color="red";
            return false;
    }
}
function emailValidate(){
    if(regexEmail.test(Email1.value)){
            errorEmail.innerText="Valid format";
            errorEmail.style.color="green";
            return true;
    }
    else{
            errorEmail.innerText="Enter valid format";
            errorEmail.style.color="red";
            return false;
    }
}

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
    else{
            errorPass.innerText="Enter valid format";
            errorPass.style.color="red";
            return false;
    }
}
