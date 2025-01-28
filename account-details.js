const submitButton = document.getElementById("submitButton");
const termsCheckbox = document.getElementById("terms");

submitButton.addEventListener("click", (event) => {
     event.preventDefault();
    if (termsCheckbox.checked) {
        alert("successfully subscribed to newsletter");
        // Navigate to Home page if checkbox is ticked
        window.location.href = 'index.html';  // Redirect to another page
    } else {
        // Highlight the checkbox if not ticked
        termsCheckbox.style.border = "2px solid red";
    }

});