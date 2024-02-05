import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const StudentLoginForm = () => {

    const navigate = useNavigate();

    const [aadharNumber,setAadharNumber] = useState("");
    const [verificationMessage,setVerificationMessage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userEnteredOTP, setUserEnteredOTP] = useState("");
    const [message, setMessage] = React.useState(null);

    const handleVerifyAadhar = async () => {
        try {
          const response = await axios.post('http://localhost:5000/student/api/check-registered-student', { aadharNumber: aadharNumber });
          // Assuming backend sends a message property in the response
          if(response.data.status == "success") {
              setVerificationMessage(response.data.message);
          }
          else {
              setVerificationMessage(response.data.message);
          }
        } catch (error) {
          alert("Aadhar number not verified!");
          console.error('Error verifying Aadhar:', error);
        }
      };

      const handleSendOtp = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/aadhar/api/send-otp', {
            phoneNumber : phoneNumber
          });
          
          const responseOTP = response.data.otp;
          const responseOTPMessage = response.data.message;
          // Assuming backend sends an otp property in the response
          console.log(responseOTP);
          alert(responseOTPMessage);
        } catch (error) {
          console.error('Error sending OTP:', error);
        }
      };
  
      const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/aadhar/api/verify-otp', {
              phoneNumber : phoneNumber,
              userEnteredOTP : userEnteredOTP,
          });
          
          console.log(response.data);
          if (response.data.status == "success") {
            setMessage(response.data.message);
          } else {
            setMessage(response.data.message);
          }
        } catch (error) {
          console.error("Error verifying OTP: ", error);
        }
      };

    const handleLogin = async (e) => {
        e.preventDefault();
  
        try {
          console.log('Aadhar Number:', aadharNumber);
          navigate(`/student-registration-form/${aadharNumber}`);
      } catch (error) {
          console.error('Error logging in:', error);
      }
    };

    return (

        <div>
            <div>
                <form className="space-y-4">
                    <div className="mb-4">
                        <label className="text-sm font-bold mb-2" htmlFor="schemeName">
                            Aadhar Number:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="aadharNumber"
                            type="number"
                            name="aadharNumber"
                            value={aadharNumber}
                            onChange={(e) => setAadharNumber(e.target.value)}
                            placeholder={aadharNumber}
                        />
                        <button type="button" onClick={handleVerifyAadhar}>Verify Aadhar</button>
  
                        {verificationMessage && <p>{verificationMessage}</p>}

                        {verificationMessage.includes("successfully") && (
                            <div>
                              <label>
                                Mobile Number:
                                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                              </label>
                              <button onClick={handleSendOtp}>Send OTP</button>
                            </div>
                        )}

                        {verificationMessage.includes("successfully") && (
                                  <div>
                                    <label>
                                      Enter OTP:
                                      <input
                                          type="number"
                                          value={userEnteredOTP}
                                          onChange={(e) => setUserEnteredOTP(e.target.value)}
                                      />
                                    </label>
                                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                                  </div>
                        )}
                        {message && <p className={message.includes('successfully') ? "text-green-500" : "text-red-500"}> {message}</p>}
                        {message && message.includes("successfully") && (
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={handleLogin}>
                                Login 
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentLoginForm;