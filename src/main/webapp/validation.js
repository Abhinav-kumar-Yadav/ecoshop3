

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    
    // Get form and input elements for registration
    const registrationForm = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Email regex pattern for validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Password regex pattern (at least 8 characters, one number, and one special character)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Handle registration form submission
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for validation

        let isValid = true;

        // Validate Email
        if (!email.value || !emailPattern.test(email.value)) {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Validate Password
        if (!password.value || !passwordPattern.test(password.value)) {
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        // Validate Confirm Password
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.style.display = "block";
            isValid = false;
        } else {
            confirmPasswordError.style.display = "none";
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert("Form submitted successfully!");
            // registrationForm.submit(); // Uncomment this line if you want the form to submit.
        }
    });

    // Optional: Real-time feedback as user types
    email.addEventListener('input', function () {
        if (emailPattern.test(email.value)) {
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
        }
    });

    password.addEventListener('input', function () {
        if (passwordPattern.test(password.value)) {
            passwordError.style.display = "none";
        } else {
            passwordError.style.display = "block";
        }
    });

    confirmPassword.addEventListener('input', function () {
        if (password.value === confirmPassword.value) {
            confirmPasswordError.style.display = "none";
        } else {
            confirmPasswordError.style.display = "block";
        }
    });

    // Get form and input elements for login
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('email');
    const loginPassword = document.getElementById('password');
    const loginEmailError = document.getElementById('loginEmailError');
    const loginPasswordError = document.getElementById('loginPasswordError');

    // Handle login form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for validation

        let isValidLogin = true;

        // Validate login email
        if (!loginEmail.value) {
            loginEmailError.style.display = "block";
            isValidLogin = false;
        } else {
            loginEmailError.style.display = "none";
        }

        // Validate login password
        if (!loginPassword.value) {
            loginPasswordError.style.display = "block";
            isValidLogin = false;
        } else {
            loginPasswordError.style.display = "none";
        }

        // If both fields are filled, submit the form
        if (isValidLogin) {
            alert("Login successful!");
            // loginForm.submit(); // Uncomment this line if you want the form to submit.
        }
    });

    // Optional: Real-time feedback as user types in login form
    loginEmail.addEventListener('input', function () {
        if (loginEmail.value) {
            loginEmailError.style.display = "none";
        } else {
            loginEmailError.style.display = "block";
        }
    });

    loginPassword.addEventListener('input', function () {
        if (loginPassword.value) {
            loginPasswordError.style.display = "none";
        } else {
            loginPasswordError.style.display = "block";
        }
    });
});
