document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const errMsg = document.getElementById("error-message");

    const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (pattern.test(email)) {
        errMsg.style.display = "none";
        alert("Form Submitted Successfully!");
        document.getElementById("emailForm").reset();
    } else {
        errMsg.style.display = "block";
        errMsg.textContent = "Only Gmail addresses are allowed (example@gmail.com).";
    }
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("change", function () {
    const passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
});

// Clear form manually
document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("emailForm").reset();
    document.getElementById("error-message").style.display = "none";
});

