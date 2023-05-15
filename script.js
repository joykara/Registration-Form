//get elements
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phoneNo = document.getElementById('phone-no');
const password = document.getElementById('password');
const button = document.querySelector('button')
const confirmPassword = document.getElementById('confirm_password');
const inputContainer = document.getElementsByClassName('input-container')


form.addEventListener('submit', e => {
    e.preventDefault();          //prevent form from being submitted before validating
    if (validateForm()) {
        alert('Form submitted successfully!');
        // form.submit();
    }
});


//validate inputs function
function validateForm() {
    let isValid = true;

    // Reset error messages
    clearErrors();

    // Validate first name
    if (fname.value.trim() === '') {
        isValid = false;
        displayError(fname, 'First name is required.');
        fname.style.border = "1px solid #9c0f2b";
    }

    // Validate last name
    if (lname.value.trim() === '') {
        isValid = false;
        displayError(lname, 'Last name is required.');
        lname.style.border = "1px solid #9c0f2b";
    }

    // Validate email
    if (email.value.trim() === '') {
        isValid = false;
        displayError(email, 'Email address is required.');
        email.style.border = "1px solid #9c0f2b";
    } else if (!isValidEmail(email.value.trim())) {
        isValid = false;
        displayError(email, 'Please enter a valid email address.');
        email.style.border = "1px solid #9c0f2b";
    }

    // Validate phone number
    if (phoneNo.value.trim() === ''){
        isValid = true;
    } else if (!isValidNumber(phoneNo.value.trim())) {
        isValid = false;
        displayError(phoneNo, 'Please enter a valid phone number.');
        phoneNo.style.border = "1px solid #9c0f2b";
    }

    // Validate password
    if (password.value === '') {
        isValid = false;
        displayError(password, 'Password is required.');
        password.style.border = "1px solid #9c0f2b";
    }

    // Validate confirm password
    if (confirmPassword.value === '') {
        isValid = false;
        displayError(confirmPassword, 'Confirm password is required.');
        confirmPassword.style.border = "1px solid #9c0f2b";
    } else if (password.value !== confirmPassword.value) {
        isValid = false;
        displayError(confirmPassword, 'Passwords do not match.');
        confirmPassword.style.border = "1px solid #9c0f2b";
    }

    return isValid;

};

function displayError(inputElement, errorMessage) {
    const errorContainer = inputElement.parentElement.querySelector('.error');
    errorContainer.textContent = errorMessage;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach((errorMessage) => {
        errorMessage.textContent = '';
    });
}

function isValidEmail(email) {
    //basic email validation regex pattern
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

function isValidNumber(phoneNo) {
    // basic phone number regex pattern
    const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneNumberRegex.test(phoneNo);
}