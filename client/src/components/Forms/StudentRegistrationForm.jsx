import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./FormStyle.css";

const StudentRegistrationForm = () => {

    const navigate = useNavigate();
    const { aadharNumber } = useParams();

    const [educationDetails, setEducationDetails] = React.useState({
        aadharNumber: aadharNumber,
        instName: "",
        degree: "",
        startDate: "",
        graduationDate: "",
        currentYear: ""
    });


    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setEducationDetails({
            ...educationDetails,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(educationDetails);

        try {
            const response = await axios.post(`http://localhost:5000/student/api/register-student/${aadharNumber}`, {educationDetails});
            console.log(response.data);
            alert(response.data.message);
        }
        catch (err) {
            console.log(err);
        }


        setEducationDetails({
            aadharNumber: aadharNumber,
            instName: "",
            degree: "",
            startDate: "",
            graduationDate: "",
            currentYear: ""
        })

        navigate(`/student-login/${aadharNumber}`)
    };

    return (
        
                            <div className="bg-gray-100 h-full flex items-center justify-center p-10">
                            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                                <form className="space-y-4">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schemeName">
                                            Aadhar Number:
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="aadharNumber"
                                            type="number"
                                            name="aadharNumber"
                                                           readOnly
                                            style={{ backgroundColor: '#f0f0f0', color: '#333' }}
                                            value={educationDetails.aadharNumber}
                                            onChange={handleInputChange}
                                            placeholder={educationDetails.aadharNumber}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                                            Institute Name:
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="instName"
                                            type="text"
                                            name="instName"
                                            value={educationDetails.instName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                                            Enter Name of your degree:
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="degree"
                                            type="text"
                                            name="degree"
                                            value={educationDetails.degree}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="income">
                                            Start Date of your degree:
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="startDate"
                                            type="date"
                                            name="startDate"
                                            value={educationDetails.startDate}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guidelines">
                                            Graduation Date of your degree:
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="graduationDate"
                                            type="date"
                                            name="graduationDate"
                                            value={educationDetails.graduationDate}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                    <label htmlFor="graduationYear">Current Year of your degree:</label>
                                        <select
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="currentYear"
                                          name="currentYear"
                                          value={educationDetails.currentYear}
                                          onChange={handleInputChange}
                                        >
                                          <option value="First">First</option>
                                          <option value="Second">Second</option>
                                          <option value="Third">Third</option>
                                          <option value="Fourth">Fourth</option>
                                          <option value="Fifth">Fifth</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={handleSubmit}
                                        >
                                            Register to ISP
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div> 
    )
}

export default StudentRegistrationForm;