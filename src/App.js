import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import ExperienceDetails from "./components/ExperienceDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Skills />
              <Experience />
              <Education />
              <Contact />
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/experience/:id" element={<ExperienceDetails />} />
      </Routes>
    </div>
  );
};

export default App;
