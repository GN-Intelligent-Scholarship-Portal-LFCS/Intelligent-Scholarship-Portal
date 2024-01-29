import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import { StudentRegistrationGuidelines, OrganizationRegistrationGuidelines } from "./Pages/NewRegistrationPage";
import AadharStudentRegistration from "./Pages/AadharStudentRegistrationPage";
import OrgRegistration from "./Pages/OrganizationRegistration";
import OrgLogin from "./Pages/OrganisationLogin";
import OrgScholarshipForm from "./Pages/OrgScholarshipForm";
import StudentRegistration from "./Pages/StudentRegistrationPage";
import StudentLogin from "./Pages/StudentLoginPage";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} /> //Home Page
            <Route path="/registration-student" element={<StudentRegistrationGuidelines />} />  //Student Guidelines Page
            <Route path="/student-registration" element={<AadharStudentRegistration />} />  //Aadhar Registration Page
            <Route path="/student-registration-form/:aadharNumber" element={<StudentRegistration />} /> //Student Registration Page
            <Route path="/student-login/:aadharNumber" element={<StudentLogin />} /> //Path to Login for Students
            <Route path="/registration-organization" element={<OrganizationRegistrationGuidelines />} />  //Path to Guidelines Page for Organisations
            <Route path="/organization-registration" element={<OrgRegistration />} />  //Path to TAN Registration for Organisations
            <Route path="/organisation-login/:tanNumber" element={<OrgLogin />} />  //Path to Login Page for Organisations
            <Route path="/fill-scheme-details/:tanNumber" element={<OrgScholarshipForm />} />   //Path to fill scholarship form for Organisations
        </Routes>
    );
}

export default App;