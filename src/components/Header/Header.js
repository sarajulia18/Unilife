import React from "react";
import "./Header.css";
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
        <img src={SmallHeart} alt="small heart" />
        <li>Shortlist</li>
        <img src={Email} alt="email envelope" />
        <li>Contact Us</li>
      </ul>
    </div>
  );
}
