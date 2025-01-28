const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const submitButton = document.getElementById("submitButton");

// Regular expression for email validation
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;

  if (emailPattern.test(emailValue)) {
    errorMessage.textContent = ""; // Clear the error message
    submitButton.disabled = false; // Enable the button
  } else {
    errorMessage.textContent = "Please enter a valid email address.";
    submitButton.disabled = true; // Disable the button
  }
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission
  if (emailInput.value) {
    console.log(emailInput.value);
    window.location.href = "create-account.html?email=" + encodeURIComponent(emailInput.value );
  }
});
