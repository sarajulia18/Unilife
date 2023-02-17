import { React, useState } from 'react';

export default function BookViewingModal() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [msgInput, setMsgInput] = useState("");
  
  function handleNameInputChange(e) {
    setEmailInput(e.target.value);
  }
  function handleEmailInputChange(e) {
    setEmailInput(e.target.value);
  }
  function handlePhoneInputChange(e) {
    setEmailInput(e.target.value);
  }
  function handleMsgInputChange(e) {
    setEmailInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h2>Book a Viewing</h2>
      {/* <p>input address api here</p> */}
      <form onSumbit = {handleSubmit}>
        <input type="text" placeholder="Enter your name" onChange={handleNameInputChange}/>
        <input type="email" placeholder="Enter your email address" onChange={handleEmailInputChange}/>
        <input type="number" placeholder="Enter your phone number" onChange={handlePhoneInputChange}/>
        <input type="text" placeholder="Enter your message" onChange={handleMsgInputChange}/>
        <button>Submit</button>
       
      </form>
    </>
  )
}
