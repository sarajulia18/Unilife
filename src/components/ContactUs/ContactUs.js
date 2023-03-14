import React, { useState } from "react";

import "./ContactUs.css";
import Contact from "../../assets/contact-modal-icon.png";

export default function ContactUs() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [msgInput, setMsgInput] = useState("");

  function handleNameInputChange(e) {
    setNameInput(e.target.value);
  }
  function handleEmailInputChange(e) {
    setEmailInput(e.target.value);
  }
  function handlePhoneInputChange(e) {
    setPhoneInput(e.target.value);
  }
  function handleMsgInputChange(e) {
    setMsgInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="full-form">
      <div className="top-contact">
        <div className="top-text">
          <h1>Contact Us</h1>
          <p>
            Feel free to contact us if you have any questions.<br></br> Looking
            forward to hear from you
          </p>
        </div>
        <div className="top-icon">
          <img src={Contact} alt="mailbox icon" />
        </div>
      </div>
      <form className="row g-3 bottom-contact" onSumbit={handleSubmit}>
        <div className="col-md-6">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            onChange={handleNameInputChange}
          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail" className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            onChange={handleEmailInputChange}
          />
        </div>
        <div className="col-md-6">
          <label for="inputNum" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter your phone number"
            onChange={handlePhoneInputChange}
          />
        </div>
        <div className="col-md-6">
          <label for="message" className="form-label">
            Message
          </label>
          <input
            type="text"
            className="form-control-msg"
            placeholder="Enter your message"
            onChange={handleMsgInputChange}
          />
        </div>
        <div className="col-md-6">
          <label for="dropDown" className="form-label">
            Are you a...
          </label>
          <select className="form-control">
            <option>Student</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="submit"
            value="Submit"
            className="contact-submit-btn"
          ></input>
        </div>
      </form>
    </div>
  );
}
