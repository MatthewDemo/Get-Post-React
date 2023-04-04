import "./App.scss";
import React from "react";
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
      </div>
    </div>
  );
}

export default App;
