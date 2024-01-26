import React from "react";
import Header from "../Header/Header";

function OrganizationRegistration() {
    return <div>
        <Header />
        <div className="container card-form shadow mt-4 p-4" style={{ fontFamily: 'Cambria, serif' }}>
            <div className="card-body bg-white">
            <p className="text-center themeFontcolor" style={{ fontSize: "20px", backgroundColor: "#115a87", color: "#fff", padding: "20px" }}>
                <strong>Intelligent Scholarship Portal 2023-24 - Organization Registration</strong>
            </p>
            <hr />
            <h6 className="text-justify text-danger">
                <strong>* Please fill all the details carefully.</strong>
            </h6>
            <form>
                <label imp>TAN Number</label>{" "}
                <input type="text" />
                <br />
            </form>
            </div>
        </div>
    </div>;
}

export default OrganizationRegistration;