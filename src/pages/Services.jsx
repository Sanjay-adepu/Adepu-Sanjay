import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import "./Services.css"; // Import CSS

const servicesData = [
  {
    category: "Web Development",
    services: ["Full-Stack Websites", "E-commerce Stores", "Portfolio Websites", "Landing Pages", "Admin Dashboards"]
  },
  {
    category: "Frontend Development",
    services: ["HTML & JavaScript Applications", "React.js Applications", "Single Page Applications (SPA)"]
  },
  {
    category: "Backend Development",
    services: ["Node.js APIs", "Express.js & MongoDB", "Authentication Systems"]
  },
  {
    category: "Other Services",
    services: ["Web Hosting & Deployment", "Database Management"]
  }
];

const Services = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> {/* Pass props */}
      <div className={`services-container ${darkMode ? "dark" : ""}`}>
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">We provide all types of websites and development services.</p>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className={`service-card ${darkMode ? "dark" : ""}`}>
              <h3>{service.category}</h3>
              <ul>
                {service.services.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;