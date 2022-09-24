let email1=document.getElementById("email1");
let password1=document.getElementById("password1");
let error1=document.getElementById("error1");

    function validate1(){
    let regexp1=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var passw1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;

        if(regexp1.test(email1.value) && (passw1.test(password1.value))) 
        {
        error1.innerHTML="Valid";
        error1.style.color="green";
        return true;
        }
        else{
        error1.innerHTML="Invalid";
        error1.style.color="red";
        return false;
        }
}
    password1.addEventListener('input',()=>{
        if(password1.value.length >0){
            error1.style.display="block";
        }
        else{
            error1.style.display="None";
 }
        if(password1.value.length>8){
    error1.innerHTML="strong";
    error1.style.color="green";
        }
        else if(password1.value.length==8){
            error1.innerHTML="Medium";
            error1.style.color="orange";
                }
                else if(password1.value.length<8){
                    error1.innerHTML="Poor";
                    error1.style.color="Red";
                        }
                        })
                    