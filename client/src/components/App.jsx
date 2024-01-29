import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import {StudentRegistrationGuidelines, OrganizationRegistrationGuidelines} from "./Scholarship/NewRegistrationPage";
import StudentRegistration from "../components/Scholarship/StudentRegistration";
import OrganizationRegistration from "./Scholarship/OrganizationRegistration";

function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/registration-student" element={<StudentRegistrationGuidelines />} />
            <Route path="/student-registration" element={<StudentRegistration />} />
            <Route path="/registration-organization" element={<OrganizationRegistrationGuidelines />} />
            <Route path="/organization-registration" element={<OrganizationRegistration />} />
        </Routes>
    );
}

export default App;