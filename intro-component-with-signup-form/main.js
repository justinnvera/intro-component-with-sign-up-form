// input elements
let firstName = document.getElementById("first-name");  
let lastName = document.getElementById("last-name");  
let emailAddress = document.getElementById("email-address");  
let password = document.getElementById("password");  

// error messages elements
let firstNameErrorMessage = document.getElementById("first-name-error-message");
let lastNameErrorMessage = document.getElementById("last-name-error-message");
let emailAddressErrorMessage = document.getElementById("email-address-error-message");
let passwordErrorMessage = document.getElementById("password-error-message");

// error icon elements
let firstNameErrorIcon = document.getElementById("first-name-error-icon");
let lastNameErrorIcon = document.getElementById("last-name-error-icon");
let emailAddressErrorIcon = document.getElementById("email-address-error-icon");
let passwordErrorIcon = document.getElementById("password-error-icon");

// form element
let signupForm = document.forms['signup-form'];

// check function
function check() {
    // first name
    if (firstName.value <= 0) { 
        // error on
        firstName.style.border = "var(--red) 2px solid"; // adds red border
        firstName.classList.add("colored-placeholder"); // adds red colored placeholder
        firstNameErrorMessage.style.display = "block"; // displays error message
        firstNameErrorIcon.style.opacity = "1"; // displays error icon
    } else {
        // error off
        firstName.style.border = "var(--grayish-blue) 1px solid"; // removes red border
        firstNameErrorMessage.style.display = "none"; // hides error message
        firstNameErrorIcon.style.opacity = "0";   // hides error icon
    } 
    // last name 
    if (lastName.value <= 0) {
        // error on
        lastName.style.border = "var(--red) 2px solid"; // adds red border
        lastName.classList.add("colored-placeholder");  // adds red colored placeholder
        lastNameErrorMessage.style.display = "block"; // displays error message
        lastNameErrorIcon.style.opacity = "1";  // displays error icon
    } else {
        // error off
        lastName.style.border = "var(--grayish-blue) 1px solid";  // removes red border
        lastNameErrorMessage.style.display = "none"; // hides error message
        lastNameErrorIcon.style.opacity = "0"; // hides error icon  
    }
    // email address
    if (emailAddress.value <= 0) {
        // error on
        emailAddress.placeholder = "email@example/com"; // adds "email@example/com" placeholder
        emailAddress.classList.add("colored-placeholder"); // adds red colored placeholder
        emailAddress.style.border = "var(--red) 2px solid"; // adds red border
        emailAddressErrorMessage.style.display = "block"; // displays error message 
        emailAddressErrorIcon.style.opacity = "1";  // displays error icon
    } else {
        // error off
        emailAddress.style.border = "var(--grayish-blue) 1px solid"; // removes red border 
        emailAddressErrorMessage.style.display = "none"; // hides erorr message
        emailAddressErrorIcon.style.opacity = "0";  // hides error icon
    }
    // password
    if (password.value <= 0) {
        // error on
        password.style.border = "var(--red) 2px solid"; // adds red border
        password.classList.add("colored-placeholder");  // adds red colored placeholder
        passwordErrorMessage.style.display = "block"; // displays error message
        passwordErrorIcon.style.opacity = "1";// displays error icon
    } else {
        // error off
        password.style.border = "var(--grayish-blue) 1px solid";  // removes red border
        passwordErrorMessage.style.display = "none"; // hides error message
        passwordErrorIcon.style.opacity = "0"; // hides error icon
    }
}