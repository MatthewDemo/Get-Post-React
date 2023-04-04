import React, { useState } from "react";
import "./PostBlock.scss";
import InputContainer from "./inputContainer/InputContainer";
import SelectContainer from "./selectContainer/SelectContainer";
import ImageUploader from "./imageUploader/ImageUploader";
import SubmitButton from "./submitButton/SubmitButton";

const PostBlock = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const selectedRadioAsNumber = parseInt(selectedRadio);
  const [selectedFile, setSelectedFile] = useState(null);


  return (
    <div className="post-block">
      <div className="post-text-container" id="post-text-container">
        <h1 className="post-text">Working with POST request</h1>
      </div>
      <InputContainer
        setEmail={setEmail}
        setName={setName}
        setPhone={setPhone}
      />
      <SelectContainer setSelectedRadio={setSelectedRadio} />
      <ImageUploader selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
      <SubmitButton
        name={name}
        email={email}
        phone={phone}
        selectedRadioAsNumber={selectedRadioAsNumber}
        selectedFile={selectedFile}
      />
    </div>
  );
};

export default PostBlock;
