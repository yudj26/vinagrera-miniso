import React from "react";
import Header from "./Header";
import ImageCarousel from "./ImageCarousel";
import Content from "./Content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageCarousel />
      <Content />
    </div>
  );
}

export default App;
