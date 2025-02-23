import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      
       <Route path="/projects" element={<ProjectList darkMode={darkMode} />} />
        <Route path="/contact" element={<Contact />} />
<Route path="/services" element={<Services darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      
      
      </Routes>
    </div>
  );
};

export default App;