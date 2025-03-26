import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${darkMode ? "dark" : ""}`}>
            {/* Logo Section */}
            

            {/* Hamburger Menu Button */}
            <button className="menu-toggle" onClick={toggleMenu}>
                <div className={`hamburger ${menuOpen ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            {/* Navigation Links */}
<ul className={`nav-links ${menuOpen ? "open" : ""}`}>
    <li><Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link></li>
    <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>My Work</Link></li>
    <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About Me</Link></li>
    <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={() => setMenuOpen(false)}>Services</Link></li>
    <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</Link></li>
    
    {/* Dark Mode Toggle Inside Nav */}
    <li className="dark-mode-toggle">
        <button onClick={toggleDarkMode} className="dark-mode-btn">
            {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    </li>
</ul>
        </nav>
    );
};

export default Navbar;