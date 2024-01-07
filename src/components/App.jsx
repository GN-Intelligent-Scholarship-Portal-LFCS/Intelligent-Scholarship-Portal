import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import RegistrationGuidelines from "./Home/NewRegistrationPage";
import ApplicantRegistration from "./Home/ApplicantRegistration";

function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/registration" element={<RegistrationGuidelines />} />
            <Route path="/applicant-registration" element={<ApplicantRegistration />} />
        </Routes>
    );
}

export default App;