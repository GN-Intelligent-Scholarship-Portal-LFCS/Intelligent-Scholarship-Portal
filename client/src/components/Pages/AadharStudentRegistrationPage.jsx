import React, { useState } from "react";
import Header from "../Header/Header";
import AadhaarForm from "../Forms/AadhaarStudentForm";

const AadharStudentRegistration = () => {

  return (
      <>
          <Header />
          <div className="container card-form shadow mt-4 p-4" style={{ fontFamily: 'Cambria, serif' }}>
              <div className="card-body bg-white">
                  <p className="text-center themeFontcolor" style={{ fontSize: "20px", backgroundColor: "#115a87", color: "#fff", padding: "20px" }}>
                      <strong>Aadhar Registration for Student</strong>
                  </p>
                  <hr />
                  <form>
                      <AadhaarForm />
                  </form>
              </div>
          </div>
      </>
  );
}

export default AadharStudentRegistration;
