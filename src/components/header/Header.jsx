import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";

function scrollToUsers() {
  const usersContainer = document.getElementById("person-container");
  const usersContainerTop = usersContainer.getBoundingClientRect().top;
  window.scrollTo({
    top: usersContainerTop,
    behavior: "smooth",
  });
}
export function scrollToSignUp() {
  const signUpContainer = document.getElementById("post-text-container");
  const signUpContainerTop = signUpContainer.getBoundingClientRect().top;
  window.scrollTo({
    top: signUpContainerTop + 10,
    behavior: "smooth",
  });
}

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" className="header-logo" />
      <div className="buttons-header-container">
        <button className="headerBtn" id="users-button" onClick={scrollToUsers}>
          Users
        </button>
        <button
          className="headerBtn"
          id="sign-up-button"
          onClick={scrollToSignUp}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
