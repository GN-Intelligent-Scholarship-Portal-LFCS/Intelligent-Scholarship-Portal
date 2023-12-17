import React from "react";

function TextTitleItem(props) {
    return (<div className="text-item column">
    <ul className="government-title-text">
      <li>
        <a href={props.link}>
          {props.title}
          <br />
          {props.subtitle}
        </a>
      </li>
    </ul>
  </div>);
}

function ImageTitleItem(props) {
  return (<div className="image-item column">
    <ul className="government-title-image">
      <li>
        <img
          src={props.img}
          alt={props.alt}
        />
      </li>
    </ul>
  </div>);
}

function ISPTitleItem() {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <h1 className="text-center">Intelligent Scholarship Portal</h1>
      <h3 className="text-center">
        Ministry of Electronics Information Technology, Government of India
      </h3>
      <h6 className="text-center">
        <strong className="announcementText">(Academic Year 2023-24)</strong>
      </h6>
    </div>
  );
}

function Announcement() {
  return (
    <div className="container-fluid">
      <div className="row announcement-box">
        <div className="col-sm-12 text-center border border-warning animation-slideLeft">
          <span className="p-2 d-block">
            Please check the Announcement corner regularly for the latest updates and information. <br />
            For any technical queries, please contact Helpdesk at
            <strong className="announcementText">
              {" "}helpdesk@nsp.gov.in <span className="text-muted">or</span> 0120 - 6619540
            </strong>
            <br />
            <span className="text-primary"> (from 8 AM to 8 PM on all days, excluding holidays) </span>
          </span>
        </div>
      </div>
    </div>
  );
}


export {TextTitleItem, ImageTitleItem, ISPTitleItem, Announcement};