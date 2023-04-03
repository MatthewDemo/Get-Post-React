import React from "react";
import "./MainImage.scss";
import { scrollToSignUp } from "../header/Header";

const MainImage = () => {
  return (
    <div className="mainImage">
      <div className="container">
        <div className="infocontainer">
          <div className="textcontainer">
            <h1>Test assignment for front-end developer</h1>
            <p>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
          </div>
          <button className="btn" onClick={scrollToSignUp}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
