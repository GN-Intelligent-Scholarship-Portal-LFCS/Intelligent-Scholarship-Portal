import React, { useState } from "react";
import { Notification, SuccessNotification } from "./NotificationToast";
import { Validator } from 'esevajs';

// Utility function to generate OTP
const generateOTP = () => {
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    return generatedOTP;
};

// Utility function to verify OTP
const verifyOTP = (enteredOtp, expectedOtp) => enteredOtp === expectedOtp;

function MobileNoForm({ disabled }) {
    const [mobileNumber, setMobileNumber] = useState('');
    const [validationResult, setValidationResult] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [otp, setOtp] = useState('');
    const [enteredOtp, setEnteredOtp] = useState('');

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleVerifyMobileNumber = () => {
        if (!mobileNumber.trim()) {
            setShowNotification(true);
            setValidationResult(false);
            return;
        }

        const isValid = Validator.mobile(mobileNumber);

        setValidationResult(isValid);
        setShowNotification(true);

        if (isValid) {
            const generatedOtp = generateOTP();
            setOtp(generatedOtp);
            console.log("Generated OTP:", generatedOtp);
        }
    };

    const handleOtpChange = (event) => {
        setEnteredOtp(event.target.value);
    };

    const handleVerifyOtp = () => {
        // Add logic to verify the entered OTP
        if (verifyOTP(enteredOtp, otp)) {
            setShowNotification(true);
            setValidationResult(true);
            // Reset OTP states
            setOtp('');
            setEnteredOtp('');
        } else {
            setShowNotification(false);
            setValidationResult(false);
        }
    };

    return (
        <div className="form-group">
            <div className="mb-3 col-md-6">
                <div className="input-group text-center">
                    <input
                        type="text"
                        placeholder="Enter your Mobile No..."
                        className="form-control"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                        disabled={disabled}
                        required
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleVerifyMobileNumber}
                        disabled={disabled}
                    >
                        Send OTP
                    </button>
                </div>
            </div>

            {otp && (
                <div className="mb-3 col-md-6">
                    <div className="input-group text-center">
                        <input
                            type="text"
                            placeholder="Enter OTP..."
                            className="form-control"
                            id="enteredOtp"
                            value={enteredOtp}
                            onChange={handleOtpChange}
                            disabled={disabled}
                            required
                        />
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleVerifyOtp}
                            disabled={disabled}
                        >
                            Verify OTP
                        </button>
                    </div>
                </div>
            )}

            {showNotification && (
                <div className="row">
                    <div className="col-md-12">
                        {validationResult ? (
                            <SuccessNotification message={`Mobile number is valid! ${otp}`} />
                        ) : (
                            <Notification message={enteredOtp ? "Invalid OTP! Please try again." : "Please enter a valid OTP."} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileNoForm;
