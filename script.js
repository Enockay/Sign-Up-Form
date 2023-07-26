const password = document.getElementById("password").value;
const input = document.getElementById("input").value;
const confirmPassword = document.getElementById("confirm-password");
function validate(){
    if(password !== confirmPassword){
        const match = document.querySelector(".match");
        match.textContent = "password do not match";
        match.style.color = "red;"
        input.style.border  = "1px solid red"
        input.focus;
       return false;
    }
    return true;
    }

document.querySelector(".button").addEventListener("click",validate)