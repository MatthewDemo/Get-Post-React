import React, { useState, useEffect } from "react";
import "./PostBlock.scss";
import InputContainer from "./inputContainer/InputContainer";
import SelectContainer from "./selectContainer/SelectContainer";
import ImageUploader from "./imageUploader/ImageUploader";

const PostBlock = () => {
  const [token, setToken] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const selectedRadioAsNumber = parseInt(selectedRadio);

  const fetchApiToken = () => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setToken(data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApiToken();
  }, []);

  const submitInfo = () => {
    const formData = new FormData();
    var fileField = document.querySelector('input[type="file"]');
    formData.append("position_id", `${selectedRadioAsNumber}`);
    formData.append("name", { name });
    formData.append("email", `${email}`);
    formData.append("phone", `${phone}`);
    formData.append("photo", fileField.files[0]);
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      method: "POST",
      body: formData,
      headers: { Token: token },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (data.success) {
          console.log("SUCCESS");
        } else {
          console.log("FAILURED");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="post-block">
      <div className="post-text-container" id="post-text-container">
        <h1>Working with POST request</h1>
      </div>
      <InputContainer
        setEmail={setEmail}
        setName={setName}
        setPhone={setPhone}
      />
      <SelectContainer setSelectedRadio={setSelectedRadio} />
      <ImageUploader />
      <button className="sign-up-btn" onClick={submitInfo}>
        Sign up
      </button>
    </div>
  );
};

export default PostBlock;
