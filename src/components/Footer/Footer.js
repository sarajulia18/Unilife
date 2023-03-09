import React from "react";
import "./Footer.css";

import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="blu-footer">
        <div className="row m-auto blu-row">
          <div className="col-12 col-md-6 col-lg-6 blu-left">
            <h3>Keep in touch</h3>
            <p>
              Curious about new offerings? Sign up for our weekly newsletter and
              stay informed.
            </p>
            <input type="search" className="newsletter mt-2" />
          </div>
          <div className="col-12 col-md-6 col-lg-6 blu-right">
            <h3>Let's Socialize</h3>
            <div className="social">
              <img src={Facebook} alt="Facebook Icon" />
              <p>Facebook</p>
            </div>
            <div className="social">
              <img src={Twitter} alt="Twitter Icon" />
              <p>Twitter</p>
            </div>
            <div className="social">
              <img src={Instagram} alt="Instagram Icon" />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blk-footer">
        <div className="row m-auto footer-row">
          <div className="col-12 col-md-6 col-lg-6">
            <ul className="footer-links">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Cookie Policies</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-6 footer-info">
            <p>2022</p>
            <p>@UniLife</p>
          </div>
        </div>
      </div>
    </div>
  );
}
