// Show the popup with the project description
function showPopup(message) {
    document.getElementById('popup-message').innerText = message;
    document.getElementById('popup').style.display = 'flex';
}

// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Confirm form submission
function confirmSubmit() {
    document.getElementById('warning-box').style.display = 'block';
    return false; // Prevent form from submitting immediately
}

// Submit form
function submitForm() {
    document.getElementById('contact-form').submit();
}

// Cancel form submission
function cancelSubmit() {
    document.getElementById('warning-box').style.display = 'none';
}
