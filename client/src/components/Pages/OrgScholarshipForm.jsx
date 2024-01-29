import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const OrgScholarshipForm = () => {

    const navigate = useNavigate();
    const { tanNumber } = useParams();

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
        })
    }

    return (

        <div className="bg-gray-100 h-full flex items-center justify-center p-10">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Scholarship Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                            Guidelines (insert a pdf for throrough guide):
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="guidelines"
                            type="text"
                            name="guidelines"
                            value={formData.guidelines}
                            onChange={handleInputChange}
                            placeholder="guidelines"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type='submit'
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