import React, { useState } from "react";
import Header from "../Header/Header";
import OrgRegistrationForm from "../Forms/OrgRegistrationForm";

const OrgRegistration = () => {

  return (
      <>
          <Header />
          <div className="container card-form shadow mt-4 p-4" style={{ fontFamily: 'Cambria, serif' }}>
              <div className="card-body bg-white">
                  <p className="text-center themeFontcolor" style={{ fontSize: "20px", backgroundColor: "#115a87", color: "#fff", padding: "20px" }}>
                      <strong>Organisation Registration</strong>
                  </p>
                  <hr />
                  <form>
                      <OrgRegistrationForm />
                  </form>
              </div>
          </div>
      </>
  );
}

export default OrgRegistration;
