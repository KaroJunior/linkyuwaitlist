function handleFormSubmit(event) {
    event.preventDefault();  // Prevent the form from submitting immediately

    // Show an alert to the user
    alert("Thank you! You'll be notified when Linkyu is live.");

    // Now, submit the form
    event.target.submit();  // Submit the form after the alert

    // Reset the form
    document.getElementById('waitlist-form').reset();
}
