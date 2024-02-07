import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./FormStyle.css";

const OrgScholarshipForm = () => {

    const navigate = useNavigate();
    const { tanNumber } = useParams();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const [formData, setFormData] = React.useState({
        schemeName: "",
        startDate: "",
        endDate: "",
        amount: "",
        guidelines: ""
    });


    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        if (selectedFile) {
            // Here you can handle the file submission, such as uploading it to a server
            console.log("Selected file:", selectedFile);
        } else {
            alert("Please select a file.");
        }
        
        try {
            const response = await axios.post(`http://localhost:5000/scholarship/api/fill-scholarship-form/${tanNumber}`, formData);
            console.log(response.data);
            alert(response.data.message);
        }
        catch (err) {
            console.log(err);
        }


        setFormData({
            schemeName: "",
            startDate: "",
            endDate: "",
            amount: "",
            guidelines: ""
        });

        navigate(`/`);
    }

    return (

        <div className="bg-gray-100 h-full flex items-center justify-center p-10">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <form className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schemeName">
                            Scheme Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="schemeName"
                            type="text"
                            name="schemeName"
                            value={formData.schemeName}
                            onChange={handleInputChange}
                            placeholder="scheme name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                            Start Date:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="startDate"
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                            End Date:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="endDate"
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="income">
                            Amount :
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="income"
                            type="number"
                            name="amount"
                            value={formData.income}
                            onChange={handleInputChange}
                            placeholder="1000000"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guidelines">
                            Guidelines (insert a pdf for guide):
                        </label>
                        <input
                        type="file"
                        id="fileInput"
                        accept=".pdf"
                        onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleSubmit}
                        >
                            Upload Your Scholarship Scheme
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrgScholarshipForm;