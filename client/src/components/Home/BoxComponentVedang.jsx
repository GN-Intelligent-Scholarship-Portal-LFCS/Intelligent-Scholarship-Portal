import React from "react";
import { Link } from "react-router-dom";
import "./BoxComponentVedang.css";

const Box = (props) => {
  return (
    <div className="box">
      <div className="box-heading">
        {props.heading}
      </div>
      <div className="box-content">
        <div className="link-section">
          <Link className="link" to={props.loginLink} >{props.loginText}</Link>
        </div>
        <div className="link-section">
          <Link className="link" to={props.registerLink} >{props.registerText}</Link>
        </div>
      </div>
    </div>
  );
}

const Boxes = () => {
  return (
    <div className="boxes-section">
      <Box
        heading="🏬Private Organization"
        loginText="Login"
        loginLink="/organisation-login/:tanNumber"
        registerText="Register"
        registerLink="/registration-organization"
      />
      <Box
        heading="👤 Applicant Corner"
        loginText="Login"
        loginLink="/student-login/:aadharNumber"
        registerText="Register"
        registerLink="/registration-student"
      />
      <Box
        heading="🏛️Institute Corner"
        loginText="Login"
        loginLink="/institute-login"
        registerText="Register"
        registerLink="/institute-register"
      />
      <Box
        heading="👮 Officer's Corner"
        loginText="Login"
        loginLink="/officer-login"
        registerText="Register"
        registerLink="/officer-register"
      />
      <Box
        heading="Public Corner"
        loginText="About ISP"
        loginLink="/about-isp"
        registerText="FAQ/Guidelines"
        registerLink="/faq-guidelines"
      />
    </div>
  );
}

export default Boxes;