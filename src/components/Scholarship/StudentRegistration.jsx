import React, { useState } from "react";
import Header from "../Header/Header";
import AadhaarForm from "./AadhaarForm";
import MobileNoForm from "./MobileForm";

const StudentRegistrationForm = () => {
  const [isAadhaarVerified, setIsAadhaarVerified] = useState(false);

  return (
      <>
          <Header />
          <div className="container card-form shadow mt-4 p-4" style={{ fontFamily: 'Cambria, serif' }}>
              <div className="card-body bg-white">
                  <p className="text-center themeFontcolor" style={{ fontSize: "20px", backgroundColor: "#115a87", color: "#fff", padding: "20px" }}>
                      <strong>Intelligent Scholarship Portal 2023-24 - Student Registration</strong>
                  </p>
                  <hr />
                  <form>
                      <AadhaarForm onAadhaarVerified={() => setIsAadhaarVerified(true)} />
                      <MobileNoForm disabled={!isAadhaarVerified} />
                  </form>
              </div>
          </div>
      </>
  );
}

export default StudentRegistrationForm;;
