// Selecting elements
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const emailInput = document.getElementById("email");
const progressBars = [
  document.getElementById("bar1"),
  document.getElementById("bar2"),
  document.getElementById("bar3"),
  document.getElementById("bar4"),
];
const submitButton = document.getElementById("submitButton");


// Set default email value from home page which is already entered by user
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email"); // Get email from URL
  if (email) {
    emailInput.value = email;
  }
};

// Function to check password conditions
function checkPasswordConditions(password) {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    symbol: /[@$!%*?&]/.test(password),
  };
}

// Function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to fill progress bars sequentially
function fillProgressBarsSequentially(conditions) {
  const satisfiedConditions = Object.values(conditions).filter(Boolean).length;

  progressBars.forEach((bar, index) => {
    if (index < satisfiedConditions) {
      bar.classList.add("bg-success");
      bar.classList.remove("bg-secondary");
    } else {
      bar.classList.add("bg-secondary");
      bar.classList.remove("bg-success");
    }
  });
}

// Function to enable or disable the button and enable the button only all input condition satisfid
function updateSubmitButtonState() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const email = emailInput.value;

  const conditions = checkPasswordConditions(password);
  const allConditionsMet = Object.values(conditions).every(Boolean);
  const passwordsMatch = password === confirmPassword;
  const emailValid = isValidEmail(email);

  // Enable the button only if all conditions are met
  if (allConditionsMet && passwordsMatch && emailValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Add event listeners to inputs
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const conditions = checkPasswordConditions(password);

  fillProgressBarsSequentially(conditions);
  updateSubmitButtonState();
});

confirmPasswordInput.addEventListener("input", updateSubmitButtonState);
emailInput.addEventListener("input", updateSubmitButtonState);

// Navigate to account detail page
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    alert("Success! Your account has been created.Please Enter your details in next page which is optional");
    //Navigate to account detail page
    window.location.href = 'account-details.html'; 
  });

  // show and hide password
  function togglePassword(inputId, toggleElement) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
      input.type = "text";
      toggleElement.textContent = "Hide";
    } else {
      input.type = "password";
      toggleElement.textContent = "Show";
    }
  }