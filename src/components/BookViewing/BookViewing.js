import React, { useState } from "react";
import "./BookViewing.css";
import Viewing from "../../assets/add-view-icon.png";

export default function BookViewing({ properties }) {
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
          <h1>Book a Viewing</h1>
          <p>
            {properties?.address?.street}
            {properties?.address?.city}
            {properties?.address?.postcode}
          </p>
        </div>
        <div className="top-icon">
          <img src={Viewing} alt="home with plus sign icon" />
        </div>
      </div>
      <form className="row bottom-contact" onSumbit={handleSubmit}>
        <div className="col-md-6">
          <div className="col">
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
          <div className="col">
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
          <div className="col">
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
        </div>
        <div className="col-md-6">
          <div className="col">
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
          <div className="col">
            <input
              type="submit"
              value="Submit"
              className="contact-submit-btn"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
