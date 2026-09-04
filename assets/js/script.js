// Function to show current date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    const timeElement = document.getElementById('current-time');
    if(timeElement) {
        timeElement.innerHTML = dateTimeString;
    }
}

// Update time every second
setInterval(updateDateTime, 1000);
updateDateTime();

// Login Form Confirmation Popup
function handleLogin(event) {
    event.preventDefault(); // ফর্ম সাবমিট হওয়া আটকাবে
    const confirmSubmit = confirm("Are you sure you want to submit the login form?");
    if (confirmSubmit) {
        alert("Login Submitted Successfully!");
        // এখানে ফর্ম ডাটা প্রসেস করার কোড থাকবে
    }
}

// Add event listener to login form if it exists
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});