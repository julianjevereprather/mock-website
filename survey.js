document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const thankYouMessage = document.getElementById('thank-you');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        form.style.display = 'none'; // Hide the form
        thankYouMessage.style.display = 'block'; // Show the thank-you message
    });
});