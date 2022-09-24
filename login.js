let email=document.getElementById("email");
let password=document.getElementById("password");
let error=document.getElementById("error");

    function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var passw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
// email and password validation starts
        if(regexp.test(email.value) && (passw.test(password.value))) 
        {
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
    password.addEventListener('input',()=>{
        if(password.value.length >0){
            error.style.display="block";
        }
        else{
            error.style.display="None";
    
        }
        if(password.value.length>8){
    error.innerHTML="strong";
    error.style.color="green";
        }
        else if(password.value.length==8){
            error.innerHTML="Medium";
            error.style.color="orange";
                }
                else if(password.value.length<8){
                    error.innerHTML="Poor";
                    error.style.color="Red";
                        }
                        
    
           
                    

                })
                // email and password validation ends
