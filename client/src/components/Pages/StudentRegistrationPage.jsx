import React, { useState } from "react";
import Header from "../Header/Header";
import StudentRegistrationForm from "../Forms/StudentRegistrationForm";

const StudentRegistration = () => {

  return (
      <>
          <Header />
          <div className="container card-form shadow mt-4 p-4" style={{ fontFamily: 'Cambria, serif' }}>
              <div className="card-body bg-white">
                  <p className="text-center themeFontcolor" style={{ fontSize: "20px", backgroundColor: "#115a87", color: "#fff", padding: "20px" }}>
                      <strong>Enter your current Education details</strong>
                  </p>
                  <hr />
                  <form>
                      <StudentRegistrationForm />
                  </form>
              </div>
          </div>
      </>
  );
}

export default StudentRegistration;
