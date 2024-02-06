import React from "react";
import { Link } from "react-router-dom";

const cardData = [
    {
      title: "Student Corner",
      accordions: [
        { id: "1", heading: "Login/SignUp", 
          content:  <div>
                      <Link style={{textDecoration: "none", color: "black"}} to="/registration-student">Sign Up</Link>
                      <br />
                      <Link style={{textDecoration: "none", color: "black"}} to="/student-login/:aadharNumber">Login</Link>
                    </div> },
        { id: "2", heading: "Help", 
        content: <div>
        <ul style={{listStyle: "none", padding: "0px"}}>
        
        </ul>
        </div> },
      ],
    },
    {
      title: "Organization Corner",
      accordions: [
        { id: "3", heading: "Login/SignUp", 
          content:  <div>
                      <Link style={{textDecoration: "none", color: "black"}} to="/organization-registration">Sign Up</Link>
                      <br />
                      <Link style={{textDecoration: "none", color: "black"}} to="/organisation-login/:tanNumber">Login</Link>
                    </div> },
        { id: "4", heading: "Help", content: <Link to="/link4">Help</Link> },
      ],
    },
    {
      title: "Officer's Corner",
      accordions: [
        { id: "5", heading: "Link 5", content: <Link to="/link5">Link 5</Link> },
        { id: "6", heading: "Link 6", content: <Link to="/link6">Link 6</Link> },
      ],
    },
    {
      title: "Institute Corner",
      accordions: [
        { id: "7", heading: "Link 7", content: <Link to="/link7">Link 7</Link> },
        { id: "8", heading: "Link 8", content: <Link to="/link8">Link 8</Link> },
      ],
    },
    {
      title: "Public Corner",
      accordions: [
        { id: "9", heading: "Link 9", content: <Link to="/link9">Link 9</Link> },
        { id: "10", heading: "Link 10", content: <Link to="/link10">Link 10</Link> },
      ],
    },
  ];
  

export default cardData;  