import React, { useState, useEffect } from "react";
import "./SubmitButton.scss";
import SuccessBlock from "../successBlock/SuccessBlock";

const SubmitButton = ({
  name,
  email,
  phone,
  selectedRadioAsNumber,
  selectedFile,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [token, setToken] = useState("");

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
    const validateForm = () => {
      setIsFormValid(
        name !== "" &&
          email !== "" &&
          phone !== "" &&
          selectedRadioAsNumber &&
          selectedFile
      );
    };
    validateForm();
  }, [name, email, phone, selectedRadioAsNumber, selectedFile]);

  useEffect(() => {
    fetchApiToken();
  }, []);

  const submitButtonClassName = isFormValid
    ? "submit-button-yellow"
    : "submit-button-gray";

  const submitInfo = () => {
    const formData = new FormData();
    var fileField = document.querySelector('input[type="file"]');
    formData.append("position_id", `${selectedRadioAsNumber}`);
    formData.append("name", `${name}`);
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
          setIsFormSubmitted(true);
          setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
          }, 3000);
        } else {
          console.log("FAILURED");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <button className={submitButtonClassName} onClick={submitInfo}>
        Sign up
      </button>
      {isFormSubmitted && <SuccessBlock />}
    </>
  );
};

export default SubmitButton;
