import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="blu-footer">
        <div className="row m-auto">
          <div className="col-12 col-md-6 col-lg-4 ">
            <h3> Keep in touch</h3>
            <p>
              Curious about new offerings? Sign up for our weekly newsletter and
              stay informed.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Let's Socialize</h3>
            <ul className="zero-padding">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blk-footer">
        <div className="row m-auto">
          <div className="col-12 col-md-6 col-lg-4">
            <ul className="zero-padding">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Cookie Policies</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <p>2022</p>
            <p>@UniLife</p>
          </div>
        </div>
      </div>
    </div>
  );
}
