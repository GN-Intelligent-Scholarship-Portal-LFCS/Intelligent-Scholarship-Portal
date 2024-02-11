import React, { useState } from "react";
import Header from "../Header/Header";
import StudentSchemeForm from "../Forms/StudentSchemeForm";

const StudentScheme = () => {

  return (
      <>
          <Header />
          <div className="container card-form shadow mt-4 p-4" style={{ fontFamily: 'Cambria, serif' }}>
              <div className="card-body bg-white">
                  <form>
                      <StudentSchemeForm />
                  </form>
              </div>
          </div>
      </>
  );
}

export default StudentScheme;
