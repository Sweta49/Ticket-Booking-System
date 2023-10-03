// Array to store booking details
const bookings = [];

// Function to handle form submission
function handleBookingFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const movieId = parseInt(document.getElementById('movie-id').value);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tickets = parseInt(document.getElementById('tickets').value);

    // Validate input
    if (!name || !email || isNaN(tickets) || tickets <= 0) {
        alert('Please fill in all fields and select a valid number of tickets.');
        return;
    }

    // Store booking details
    const booking = {
        movieId,
        name,
        email,
        tickets
    };
    bookings.push(booking);

    // Display confirmation message
    const confirmationMessage = `Thank you, ${name}! You have booked ${tickets} ticket(s) for Movie ${movieId}. An email confirmation has been sent to ${email}.`;
    alert(confirmationMessage);

    // Clear form
    document.getElementById('booking-form').reset();
}

// Event listener for form submission
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', handleBookingFormSubmit);

// Function to toggle between movie selection and booking form
function bookTicket(movieId) {
    document.getElementById('movie-id').value = movieId;
    document.getElementById('movie-selection').style.display = 'none';
    document.getElementById('booking-form').style.display = 'block';
}
