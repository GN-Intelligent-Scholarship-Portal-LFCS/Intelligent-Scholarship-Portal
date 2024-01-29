// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

// Create an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory storage for OTPs (for demonstration purposes)
const otpStorage = {};

// Endpoint to send OTP
app.post('/api/send-otp', (req, res) => {
  const { phoneNumber } = req.body;

  // Validate phone number (you might want to use a library for this)
  if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
    return res.status(400).json({ status: 'error', message: 'Invalid phone number' });
  }

  // Generate a random 6-digit OTP
  const otp = generateOTP();

  // Store the OTP in memory (for demonstration purposes)
  otpStorage[phoneNumber] = otp;

  // Send OTP via SMS (in a real-world scenario, use a third-party service for SMS)
  // This is a simplified demonstration; you'd replace this with actual SMS sending code.

  // Assuming a hypothetical sendSMS function
  sendSMS(phoneNumber, `Your OTP is: ${otp}`);

  return res.json({ status: 'success', message: 'OTP sent successfully' });
});

// Endpoint to verify OTP
app.post('/api/verify-otp', (req, res) => {
  const { phoneNumber, otp } = req.body;

  // Validate phone number and OTP
  if (!phoneNumber || !isValidPhoneNumber(phoneNumber) || !otp || !isValidOTP(otp)) {
    return res.status(400).json({ status: 'error', message: 'Invalid phone number or OTP' });
  }

  // Retrieve the stored OTP for the given phone number
  const storedOTP = otpStorage[phoneNumber];

  // Check if the provided OTP matches the stored OTP
  if (otp === storedOTP) {
    // OTP matched, clear the stored OTP
    delete otpStorage[phoneNumber];
    return res.json({ status: 'success', message: 'OTP verified successfully' });
  } else {
    return res.status(400).json({ status: 'error', message: 'Invalid OTP' });
  }
});

// Utility function to generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Utility function to validate a phone number (you might want to use a library for this)
function isValidPhoneNumber(phoneNumber) {
  // For simplicity, just check if it starts with a '+'
  return phoneNumber.startsWith('+');
}

// Utility function to validate a 6-digit OTP
function isValidOTP(otp) {
  return /^\d{6}$/.test(otp);
}

// Utility function (simulated) to send SMS (replace with a real SMS service)
function sendSMS(phoneNumber, message) {
  console.log(`Sending SMS to ${phoneNumber}: ${message}`);
}

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
