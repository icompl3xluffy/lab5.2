let user=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let btn=document.getElementsByTagName("button");
let form=document.getElementById("registrationForm");
let confirmP= document.getElementById("confirmPassword")
let error=document.getElementsByClassName("error-message")
let input=document.getElementsByTagName("input")





const savedUsername = localStorage.getItem('savedUsername');
        if (savedUsername) {
            user.value = savedUsername; 
        }

        

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    if(user.value==="" || email===""|| password===""||confirmP===""){   
        alert('Error: Empty field');
    } else{
        alert("Form Submitted")
    }
    
            localStorage.setItem('savedUsername', user.value);
        
})

   if (email.validity.typeMismatch) {
      email.setCustomValidity('Please enter a valid email address, ex:name@example.com.');
    } else if (email.validity.valueMissing) {
      email.setCustomValidity('Email Address is Missing!');
    }
    else {
      email.setCustomValidity(''); 
    }

    email.addEventListener('blur', function(event) { 
  if (!email.validity.valid) {
    error.textContent = error.validationMessage;
  } else {
    error.textContent = '';
  }
});



let validateInputs
form.addEventListener('input', function (event) {

    let input = event.target;
   
    // console.log(input.validity);

    if (input.validity.valueMissing) {
 showError( " This is required" )
} else if (input.validity.typeMismatch) {
  // show "invalid format" message
} else if (input.validity.tooShort) {
  // show "too short" message
} else {
    input.validity=""

}
    input.setCustomValidity("Oh No! ERROR...");

    input.reportValidity()

    console.log(input.validationMessage)

    input.setCustomValidity("");

    // check validity of this input
    console.log(input.checkValidity());

    
    if (input.checkValidity()) {
    input.style.borderColor='green';

    }


   if (password.value!=="" && password.value===confirmP.value){
        confirmPassword.style.backgroundColor = 'lightgreen';
        password.style.background ='lightgreen';
    }else {
       confirmPassword.style.borderColor = 'red';
    }
})