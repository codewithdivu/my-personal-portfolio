import React from "react";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Components/contact";
import Education from "./Components/education";
import MainInfo from "./Components/mainInfo";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";
import Skills from "./Components/skills";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainInfo />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </BrowserRouter>
    </>
  );
};

export default App;
