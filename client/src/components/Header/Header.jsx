import React from "react";
import "./Header.css";
import NIC from "../images/NIC.png";
import G20 from "../images/G20.jpeg";
import DI from "../images/DI.png";
import { TextTitleItem, ImageTitleItem, ISPTitleItem } from "./Header-Functions";

function Header() {
  return (
    <header>
      {/* Government Header Text Section */}
      <div className="government-header-text">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Text Title Item 1 */}
          <TextTitleItem
            link="https://www.india.gov.in/"
            title="भारत सरकार"
            subtitle="Government of India"
          />

          {/* Text Title Item 2 */}
          <TextTitleItem
            link="https://www.meity.gov.in/"
            title="इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय, भारत सरकार"
            subtitle="Ministry of Electronics & Information Technology, Government of India"
          />

          {/* Text Title Item 3 */}
          <TextTitleItem link="/" title="Home" subtitle="" />
        </div>
      </div>

      {/* Government Header Image Section */}
      <div className="government-header-image">
        <div className="image-container d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Image Title Item 1 */}
          <ImageTitleItem img={NIC} alt="National Innovation Centre" />

          {/* ISP Title Item */}
          <ISPTitleItem />

          {/* Image Title Items 2 and 3 */}
          <div className="image-item-row">
            <ImageTitleItem img={G20} alt="G20" />
            <ImageTitleItem img={DI} alt="Digital India" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
