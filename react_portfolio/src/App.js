import React from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Bio } from "./components/Bio";
import { Body } from "./components/Body";
import ContactMe, { Contact } from "./components/Contact";

const App = () => {
  const name = "Svante'";
  return (
    <>
      <Header />
      <Bio />
      <Body />
      <ContactMe/>
      <div
        className="App"
        style={{
          backgroundColor: "blue",
          color: "white",
        }}
      >
        <h1>Hi {name}</h1>
        <h2>This is the start of something great</h2>
      </div>
      <Footer />
    </>
  );
};

export default App;
