import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ContactUsModal from "../../pages/ContactUsModal";
import HouseLogo from "../../assets/house-logo.svg";
import SmallHeart from "../../assets/small-heart.png";
import Email from "../../assets/email.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="site-name">
        <img src={HouseLogo} alt="logo" />
        <h3>UniLife</h3>
      </div>
      <ul className="header-list">
        <div className="shortlist-option">
          <img src={SmallHeart} alt="small heart" />
          <li>Shortlist</li>
        </div>
        <Link to={`/contactusmodal/`}>
          <div className="contact-option">
            <img src={Email} alt="email envelope" />
            <li>Contact Us</li>
          </div>
        </Link>
      </ul>
    </div>
  );
}
