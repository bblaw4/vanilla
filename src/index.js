import "./styles.css";

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const form = document.getElementById("form");
const success = document.getElementById("success");
const error = document.getElementById("error");
let errState = false;

form.addEventListener('submit', function(e){
  e.preventDefault()
   const userData = {
    firstname:firstname.value,
    lastname:lastname.value,
    email:email.value
  }
  if(userData.firstname ==="" ||userData.lastname ==="" || userData.email ===""){
    errState = true;
    if(errState){
      error.innerHTML = "Form data required";
    }
  }else{
    errState = false;
    error.innerHTML = "";
    success.innerHTML = `${firstname.value},Thank you for registering!
    A confirmation email has been sent to the email address you provided.`
    firstname.value = "";
    lastname.value = "";
    email.value = "";
  }
})

