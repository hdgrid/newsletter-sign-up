const newsletter = document.querySelector('.sign-up-form__content-container');
const successMessage = document.querySelector('.sign-up-form__success');
const dismissBtn = document.querySelector('.sign-up-form__success-dismiss');
const submitBtn = document.querySelector(".sign-up-form__form-submit");
const emailInput = document.querySelector(".sign-up-form__form-input");
const formLabel = document.querySelector('.sign-up-form__form-label');
const errorMessage = document.createElement('span');
const emailSuccess = document.querySelector('.sign-up-form__success-email')

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const email = emailInput.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* test that general pattern is valid */

    if (emailPattern.test(email)) {
        // email is valid, hide the newsletter and show the success message
        newsletter.classList.add('js-hidden');
        successMessage.classList.add('js-grid');
        emailSuccess.textContent = email; /* email address submitted by user */
        emailSuccess.style.fontWeight = 'bold';
        
        // remove the error message if it exists
        if (formLabel.contains(errorMessage)) {
            formLabel.removeChild(errorMessage);
        }
        
        // reset the input field styles
        emailInput.style.backgroundColor = '';
        emailInput.style.color = '';
    } else {
        // email is invalid, display an error message and style the input
        errorMessage.textContent = 'Valid email required';
        errorMessage.style.color = 'red';
        emailInput.style.backgroundColor = 'rgba(255, 97, 85, 0.15)';
        emailInput.style.color = 'red';
        
        // include the error message in form label if it doesn't exist
        if (!formLabel.contains(errorMessage)) {
            formLabel.appendChild(errorMessage);
        }
    }

});

dismissBtn.addEventListener("click", () => {
    successMessage.classList.remove('js-grid');
    newsletter.classList.remove('js-hidden');
});