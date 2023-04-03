import "./App.scss";
import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import MainImage from "./components/mainImage/MainImage";
import PersonContainer from "./components/personContainer/PersonContainer";
import PostBlock from "./components/postBlock/PostBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <MainImage />
        <PersonContainer />
        <PostBlock />
        <button className="sign-up-btn">Sign up</button>
      </div>
    </div>
  );
}

export default App;
