// Handle profile image click for popup message
document.getElementById('profileImage').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = 'flex';
});

// Close the popup when clicking the close button
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = 'none';
});

// Handle the contact form submission alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
});
