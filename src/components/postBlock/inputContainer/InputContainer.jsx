import React, { useState } from "react";
import "./InputContainer.scss";

const InputContainer = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  function handleEmailChange(event) {
    const inputEmail = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(inputEmail)) {
      setEmail(inputEmail);
      setIsEmailValid(true);
    } else {
      setEmail("");
      setIsEmailValid(false);
    }
  }

  function handleNameChange(event) {
    const inputName = event.target.value;
    if (inputName.length > 2 && inputName.length < 30) {
      setName(inputName);
      setIsNameValid(true);
    } else {
      setName("");
      setIsNameValid(false);
    }
  }

  function handlePhoneChange(event) {
    const inputPhone = event.target.value;
    const pattern = /^\+380/;
    if (pattern.test(inputPhone) && inputPhone.length === 13) {
      setPhone(inputPhone);
      setIsPhoneValid(true);
    } else {
      setPhone("");
      setIsPhoneValid(false);
    }
  }

  const inputEmailStyle = {
    border: !isEmailValid && "2px solid red",
  };

  const inputNameStyle = {
    border: !isNameValid && "2px solid red",
  };

   const inputPhoneStyle = {
    border: !isPhoneValid && "2px solid red",
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="info-input"
        placeholder="Your name"
        id="name"
        onChange={handleNameChange}
        style={inputNameStyle}
      />
      <input
        type="email"
        className="info-input"
        placeholder="Email"
        id="email"
        onChange={handleEmailChange}
        style={inputEmailStyle}
      />
      <input
        type="text"
        className="info-input"
        placeholder="Phone"
        id="phone"
        onChange={handlePhoneChange}
        style={inputPhoneStyle}
      />
      <h3 className="number-type">+38 (XXX) XXX - XX - XX</h3>
    </div>
  );
};

export default InputContainer;
