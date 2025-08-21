// This file contains helper functions for input validation and formatting.

// Function to format a phone number to a standard format (e.g., (123) 456-7890)
function formatPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    // If the input is valid, format it; otherwise, return the original input
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber;
}

// Function to validate an email address using a regular expression
function validateEmail(email) {
    // Regular expression for validating an email address
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Exporting the functions for use in other modules
export { formatPhoneNumber, validateEmail };