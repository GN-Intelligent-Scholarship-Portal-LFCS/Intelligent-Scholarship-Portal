import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function PublicButtons() {
    return (
        <div className="container button-container">
            <button className="public-btn"><Link className="public-btn-link" to="/registration">New Registration</Link></button>
        </div>
    );
}

export default PublicButtons;
