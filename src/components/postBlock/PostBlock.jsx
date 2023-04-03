import React, { useState } from "react";
import "./PostBlock.scss";
import InputContainer from "./inputContainer/InputContainer";
import ImageUploader from "./imageUploader/ImageUploader";

const PostBlock = () => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <div className="post-block">
      <div className="post-text-container" id="post-text-container">
        <h1>Working with POST request</h1>
      </div>
      <InputContainer />
      <div className="select-container">
        <h2>Select your position</h2>
        <label>
          <input
            type="radio"
            name="option"
            value="Frontend developer"
            className="radioBtn"
            onChange = {handleRadioChange}
          />
          Frontend developer
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="Backend developer"
            className="radioBtn"
            onChange = {handleRadioChange}
          />
          Backend developer
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="Designer"
            className="radioBtn"
            onChange = {handleRadioChange}
          />
          Designer
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="QA"
            className="radioBtn"
            onChange = {handleRadioChange}
          />
          QA
        </label>
      </div>
      {/* <div className="upload-photo-form">
        <button className="upload-button">Upload</button>
        <h2 className="upload-text">Upload your photo</h2>
      </div> */}

      <ImageUploader />
    </div>
  );
};

export default PostBlock;
