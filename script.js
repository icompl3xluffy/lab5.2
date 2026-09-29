let user=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
let btn=document.getElementsByTagName("button");
let form=document.getElementById("registrationForm");
let confirmP= document.getElementById("confirmPassword")
let error=document.getElementsByClassName("error-message")





form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // alert('form submitted');
// })


if (email.validity.typeMismatch) {
      email.setCustomValidity('Please enter a valid email address, ex:name@example.com.');
    } else if (email.validity.valueMissing) {
      email.setCustomValidity('Email Address is Missing!');
    }
    else {
      email.setCustomValidity(''); // Clear custom error if valid
    }

    error.textContent=email.validationMessage

    }) 
    
//     email.addEventListener('blur', function(event) { // Validate on blur
//   // The 'input' event listener already handles setting custom validity
//   // So here we just ensure the message is displayed if not already
//   if (!email.validity.valid) {
//     error.textContent = error.validationMessage;
//   } else {
//     error.textContent = '';
//   }
// });

let validateInputs
form.addEventListener('input', function (event) {

    let input = event.target;
   
    // console.log(input.validity);

    if (input.validity.valueMissing) {
  // show "required" message
} else if (input.validity.typeMismatch) {
  // show "invalid format" message
} else if (input.validity.tooShort) {
  // show "too short" message
} else {
  // clear the error
}
    input.setCustomValidity("Oh No! ERROR...");

    let error=document.getElementsByClassName("error-message");
    error.textContent = input.validationMessage

    // find out what the message is
    // console.log(input.validationMessage)

    // clear your message and custom error
    input.setCustomValidity("");

    // check validity of this input
    console.log(input.checkValidity());

    // checkValidity returns a boolean (true or false)
    if (input.checkValidity()) {
        

        // perform some logic here for when the input is valid
    }

    if (password.value!==confirmP.value){
        alert(passwords do not match)
    }

})
