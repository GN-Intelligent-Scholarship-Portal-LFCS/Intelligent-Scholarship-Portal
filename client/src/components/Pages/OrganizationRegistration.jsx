import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const OrgRegistration = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        tanNumber: "",
    })

    const [message, setMessage] = React.useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleProceedToLogin = () => {
        //Navigating to login.
        navigate(`/organisation-login/${formData.tanNumber}`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData.tanNumber);
            const response = await axios.post(`http://localhost:5000/scholarship/api/register-organisation/${formData.tanNumber}`);
            const responseData = response.data;
            console.log(responseData);

            if (responseData.success == true) {
                //Case 1: Organisation registered successfully.
                setMessage(responseData.message);
            } else if (responseData.success == false) {
                //Case 2: Organisation already registered.
                setMessage(responseData.message);
            } else {
                //Case 3: Organisation does not exist(Invalid TAN number).
                setMessage("Invalid TAN number!");
            }

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };


    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Register with ISP</h2>
                <form onSubmit={handleSubmit}>
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
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type='submit'
                        >
                            Register
                        </button>
                    </div>
                    {message && <p className={message.includes('successfully') ? "text-green-500" : "text-red-500"}> {message}</p>}
                    {message && message.includes("successfully") && (
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2' onClick={handleProceedToLogin}>
                            Proceed to login
                        </button>
                    )}
                </form>
            </div>
        </div >
    );
};

export default OrgRegistration;