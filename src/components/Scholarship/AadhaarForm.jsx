import React, { useState } from "react";
import validator from 'aadhaar-validator';
import {Notification, SuccessNotification} from "./NotificationToast";

function AadhaarForm({ onAadhaarVerified }) {
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [validationResult, setValidationResult] = useState(null);
    const [showNotification, setShowNotification] = useState(false);
    const [isLocked, setIsLocked] = useState(false); 

    const handleAadhaarNumberChange = (event) => {
        if (!isLocked) {
            setAadhaarNumber(event.target.value);
        }
    };

    const handleVerifyAadhaar = () => {
        if (!aadhaarNumber.trim()) {
            setShowNotification(true);
            setValidationResult(false);
            return;
        }

        const isValid = validator.isValidNumber(aadhaarNumber);
        setValidationResult(isValid);
        setShowNotification(!isValid);

        if (isValid) {
            setIsLocked(true);
            onAadhaarVerified();
        }
    };

    return (
        <div className="form-group">
            <div className="mb-3 col-md-6">
                <div className="input-group text-center">
                    <input
                        type="text"
                        placeholder="Enter your Aadhaar Card Number..."
                        className="form-control"
                        id="aadhaarNumber"
                        value={aadhaarNumber}
                        onChange={handleAadhaarNumberChange}
                        required
                        disabled={isLocked} 
                        autoComplete="off"
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleVerifyAadhaar}
                        disabled={isLocked} 
                    >
                        Verify Aadhaar
                    </button>
                </div>
            </div>
            {showNotification && (
                <div className="row">
                    <div className="col-md-12">
                        <Notification message={aadhaarNumber.trim() ? "Aadhaar number is not valid!" : "Please enter an Aadhaar number."} />
                    </div>
                </div>
            )}
            {validationResult !== null && !showNotification && (
                <div className="row">
                    <div className="col-md-3">
                        {validationResult ? (
                            <SuccessNotification message="Aadhaar is valid!" isVisible={showNotification} />
                        ) : (
                            <Notification message="Aadhaar number is not valid!" isVisible={showNotification} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AadhaarForm;