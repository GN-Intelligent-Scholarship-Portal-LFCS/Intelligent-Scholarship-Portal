import React from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import "./FormStyle.css";

const OrgLoginForm = () => {

    const navigate = useNavigate();

    const { tanNumber } = useParams(); //Extracting tan number from the URL.

    const [formData, setFormData] = React.useState({
        tanNumber: "",
        OrgPhone: "",
        otp: ""
    });

    const [message, setMessage] = React.useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        try {
            console.log("OTP generated succesfully");
            const response = await axios.post("http://localhost:5000/scholarship/api/send-otp", { phoneNumber: formData.OrgPhone });
            console.log("OrgPhone:", formData.OrgPhone);
            const otp = response.data.otp;
            const message = response.data.message;
            console.log(otp);
            alert(`${message}\n`);

        } catch (error) {
            console.error("Error sending OTP:", error);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/scholarship/api/verify-otp`, { phoneNumber: formData.OrgPhone, userEnteredOTP: formData.otp });

            if (response.data.status == "success") {
                setMessage(response.data.message);
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            console.error("Error verifying OTP: ", error);
        }
    };

    const handleVerifyTanNumber = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/scholarship/api/verify-tan-number`, { tanNumber: formData.tanNumber });
            const responseData = response.data;
            console.log(responseData);

            if (responseData.success == true) {
                //Case 1: TAN number verified.
                setMessage(responseData.message);
            } else if (responseData.success == false) {
                //Case 2: TAN number not verified.
                setMessage(responseData.message);
            } 
        } catch (error) {
            console.error("Error verifying TAN number: ", error);
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            console.log('tanNumber:', tanNumber);
            navigate(`/fill-scheme-details/${tanNumber}`);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TanNo">
                            Enter Tan no:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tanNumber"
                            type="number"
                            name="tanNumber"
                            value={formData.tanNumber}
                            onChange={handleInputChange}
                            placeholder="123456789012"
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleVerifyTanNumber}
                        >
                            Verify
                        </button>
                    </div>
                    {message && message.includes("successful") && (
                    <div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="OrgPhone">
                                Enter Mobile No:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="OrgPhone"
                                type="text"
                                name="OrgPhone"
                                value={formData.OrgPhone}
                                onChange={handleInputChange}
                                placeholder="0123456789"
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleSendOTP}>
                                    Send OTP
                            </button>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                                Enter OTP:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="otp"
                                type="text"
                                name="otp"
                                value={formData.otp}
                                onChange={handleInputChange}
                                placeholder="xxxx"
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleVerifyOTP}>
                                    Verify OTP
                            </button>
                        </div>
                    </div>
                    )}
                    {message && <p className={message.includes('successful') ? "text-green-500" : "text-red-500"}> {message}</p>}
                    {message && message.includes("successfully") && (
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={handleLogin}>
                            Login
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default OrgLoginForm;