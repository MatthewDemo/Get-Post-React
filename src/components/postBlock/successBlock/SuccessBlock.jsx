import React from "react";
import './SuccessBlock.scss'
import SuccessImg from "../../../assets/images/success-image.svg";

const SuccessBlock = () => {
  return (
    <>
      <h1 className="success-text" >User successfully registered</h1>
      <img src={SuccessImg} alt="Success" />
    </>
  );
};

export default SuccessBlock;
