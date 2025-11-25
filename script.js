// DOM Elements
const loginPage = document.getElementById('login-page');
const signupPage = document.getElementById('signup-page');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const signupPage1 = document.getElementById('signup-page-1');
const signupPage2 = document.getElementById('signup-page-2');
const nextToPage2Btn = document.getElementById('next-to-page-2');
const backToPage1Btn = document.getElementById('back-to-page-1');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Password Visibility Toggle
function setupPasswordToggle(passwordId, toggleId) {
const passwordInput = document.getElementById(passwordId);
const toggleButton = document.getElementById(toggleId);
const eyeIcon = toggleButton.querySelector('.eye-icon');

toggleButton.addEventListener('click', function () {
if (passwordInput.type === 'password') {
passwordInput.type = 'text';
toggleButton.classList.add('active');
eyeIcon.textContent = '🙈';
} else {
passwordInput.type = 'password';
toggleButton.classList.remove('active');
eyeIcon.textContent = '👁️';
}
});
}

// Initialize password toggles
function initializePasswordToggles() {
setupPasswordToggle('login-password', 'toggle-login-password');
setupPasswordToggle('password', 'toggle-password');
}

// Show Signup Form
showSignupLink.addEventListener('click', function (e) {
e.preventDefault();
loginPage.classList.remove('active');
signupPage.classList.add('active');
});

// Show Login Form
showLoginLink.addEventListener('click', function (e) {
e.preventDefault();
signupPage.classList.remove('active');
loginPage.classList.add('active');
});

// Password Validation Function
function validatePassword(password) {
return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

// Password live check
const passwordInput = document.getElementById('password');
const ruleLength = document.getElementById('rule-length');
const ruleUpper = document.getElementById('rule-uppercase');
const ruleLower = document.getElementById('rule-lowercase');
const ruleNumber = document.getElementById('rule-number');

passwordInput.addEventListener('input', function () {
const value = passwordInput.value;

ruleLength.classList.toggle('valid', value.length >= 8);
ruleUpper.classList.toggle('valid', /[A-Z]/.test(value));
ruleLower.classList.toggle('valid', /[a-z]/.test(value));
ruleNumber.classList.toggle('valid', /\d/.test(value));
});

// Navigate to Signup Page 2
nextToPage2Btn.addEventListener('click', function () {
const firstName = document.getElementById('first-name').value.trim();
const surname = document.getElementById('surname').value.trim();
const lastName = document.getElementById('last-name').value.trim();
const country = document.getElementById('country').value;
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value;

if (!firstName || !surname || !lastName || !country || !email || !password) {
alert('Please fill in all required fields before proceeding.');
return;
}

if (!validatePassword(password)) {
alert('Password must be at least 8 characters long, with 1 uppercase, 1 lowercase, and 1 number.');
return;
}

signupPage1.classList.remove('active');
signupPage2.classList.add('active');
});

// Navigate back to Signup Page 1
backToPage1Btn.addEventListener('click', function () {
signupPage2.classList.remove('active');
signupPage1.classList.add('active');
});

// Login Form Submission
loginForm.addEventListener('submit', function (e) {
e.preventDefault();
const email = document.getElementById('login-email').value;
const password = document.getElementById('login-password').value;
alert(`Login attempted with:\nEmail: ${email}\nPassword: ${password}`);
});

// Signup Form Submission
signupForm.addEventListener('submit', function (e) {
e.preventDefault();

const password = document.getElementById('password').value;
if (!validatePassword(password)) {
alert('Password does not meet the required criteria.');
return;
}

const formData = {
firstName: document.getElementById('first-name').value,
surname: document.getElementById('surname').value,
lastName: document.getElementById('last-name').value,
country: document.getElementById('country').value,
email: document.getElementById('email').value,
password: password,
careerInterest: document.getElementById('career-interest').value,
experienceLevel: document.getElementById('experience-level').value
};

alert(`Account creation attempted with:\n\nFirst Name: ${formData.firstName}\nSurname: ${formData.surname}\nLast Name: ${formData.lastName}\nCountry: ${formData.country}\nEmail: ${formData.email}\nCareer Interest: ${formData.careerInterest}\nExperience Level: ${formData.experienceLevel}\n\nPassword is valid.`);
});

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
initializePasswordToggles();
});

// Forgot Password Handler
const forgotPasswordLink = document.getElementById('forgot-password-link');

forgotPasswordLink.addEventListener('click', function (e) {
e.preventDefault();

const email = document.getElementById('login-email').value.trim();

if (!email) {
alert("Enter your email address first so we can send the reset link.");
return;
}

alert(`A password reset link has been sent to: ${email}`);
});