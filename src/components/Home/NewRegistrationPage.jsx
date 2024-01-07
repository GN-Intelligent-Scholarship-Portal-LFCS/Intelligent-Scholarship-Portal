import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Home.css";

function RegistrationGuidelines() {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

    const handleCheckbox1 = () => {
    setCheckbox1(!checkbox1);
    updateContinueButton(!checkbox2);
    };

    const handleCheckbox2 = () => {
    setCheckbox2(!checkbox2);
    updateContinueButton(!checkbox1);
    };

    const updateContinueButton = (disable) => {
    const submitButton = document.getElementById("submit");
    if (submitButton) {
    submitButton.disabled = disable;
    }
    };

    return (
        <div>
        <Header />
        <div className="container card-form shadow mt-4 p-4">
        <div className="card-body bg-white">
        <p className="text-center themeFontcolor" style={{ fontSize: "20px" }}>
        <strong>Academic Year 2023-24 <br /> Guidelines for Registration on National Scholarship Portal</strong>
        </p>
        <hr />
        <h5 className="text-justify font14">
        <strong>General Instruction/ Guidelines</strong>
        </h5>
        <div className="form-check">
            <ol className="font14">
            <li>Candidates must read the instruction carefully before registration.</li>
            <li>Candidates are advised to fill all the requisite details carefully and check properly before submission. As no correction/ editing is allowed after submission. </li>
            <li>Any wrong/ false information may lead to rejection.</li>
            <li>Candidates are advised to fill their correct and active mobile number and e-mail address in the online application. All Correspondence/ communication will be made through mobile/ e-mail only. </li>
            <li>Candidates are also advised to refer to National Scholarship Portal for regular updates.</li>
            <li>Aadhaar will be mandatory for registration on NSP 
            <ol className="font14">
                <span>➤</span>&nbsp;&nbsp; 
                <label style={{ textDecoration: "underline" }}>
                <b>Major applicants</b>
                </label> - If Aadhaar not assigned, the candidate will be required to enroll for Aadhaar and register using Aadhaar Enrolment Identification<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> (EID)<br />
                <span>➤</span>&nbsp;&nbsp;
                <label style={{ textDecoration: "underline" }}>
                <b>Minor applicants</b>
                </label> - If Aadhaar assigned, the candidate is advised to enroll using Aadhaar. Where Aadhaar/EID of the minor applicant is not assigned, <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>Aadhaar of parent/legal guardian will be mandatorily required.
            </ol>
            </li>
            <li>For applications with EID, Scholarship to be disbursed only on furnishing of Aadhaar. </li>
            <li>Aadhaar based eKYC will be performed to verify the credential of candidates.</li>
            <li>All scholarship payments will be made using Aadhaar Payment Bridge (APB) only.</li>
            <li>Candidates requested to ensure that demographic details in Aadhaar shall be same as in school/ institute records. If any difference found, the same should be corrected in Aadhaar.</li>
            <li>Registration made through parents’ Aadhaar will be valid only till the student is minor; once the candidate turns major, it will be his/her responsibility to update Aadhaar on NSP.</li>
            <li>Candidates are advised to ensure that his/her mobile number is linked to Aadhaar for receiving OTP from UIDAI. To check the mobile linking status please visit <a target="_blank" href="https://myaadhaar.uidai.gov.in/verify-email-mobile"><u>https://myaadhaar.uidai.gov.in/verify-email-mobile</u></a>.</li>
            <li>Candidates are advised to ensure that the bank account must be seeded with Aadhaar. To check the seeding status kindly visit <a target="_blank" href="https://resident.uidai.gov.in/bank-mapper"><u>https://resident.uidai.gov.in/bank-mapper</u></a>. </li>
            </ol>

        <div className="form-check">
            <input
            type="checkbox"
            id="myCheck1"
            onClick={handleCheckbox1}
            className="form-check-input ng-untouched ng-pristine ng-valid"
            />
            <label htmlFor="Check1" className="form-check-label font-weight-bold font14">
            I have read and understood the guidelines for registration.<br />
            मैंने पंजीकरण के लिए दिशानिर्देशों को पढ़ा और समझा है:
            </label>
        </div>
        <div className="form-check">
            <input
            type="checkbox"
            id="myCheck2"
            onClick={handleCheckbox2}
            className="form-check-input ng-untouched ng-pristine ng-valid"
            />
            <label htmlFor="Check2" className="form-check-label font14 font-weight-bold">
            I am aware that if more than one application is found to be filled (fresh or renewal), all applications are liable to be rejected.<br />
            मैं जागरूक हूं कि यदि एक से अधिक आवेदन भरे हुए (ताज़ा या नवीनीकरण) पाए जाते हैं, तो मेरे सभी आवेदन अस्वीकार कर दिए जाने योग्य हैं।
            </label>
        </div>
        <div className="col-sm-12" style={{ textAlign: "center" }}>
        <button type="button" id="submit" className="btn btn-success" disabled><Link style={{ textDecoration: "none", color: "white"}} to="/applicant-registration">Continue...</Link></button>
        </div>
        </div>
    </div>
    </div>
    </div>
);
}

export default RegistrationGuidelines;