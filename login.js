let email=document.getElementById("email");
let password=document.getElementById("password");
let error=document.getElementById("error");
function validate()
{
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let passw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

        if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        return true;
    }

   if(passw.test(password.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid";
        error.style.color="red";
        return false;
    }
}
