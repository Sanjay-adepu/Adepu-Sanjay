import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // External CSS  

const Home = () => {  
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//www.highperformanceformat.com/4014888afba649c3097350fc2b5cce4e/invoke.js";
        script.async = true;
        document.getElementById("ad-container")?.appendChild(script);
    }, []);

    return (  
        <div className="home-container">  
            <div className="hero">  
                <h1>Hi, I'm <span className="name-highlight">Adepu Sanjay</span>, a <span>Full Stack Web Developer</span></h1>  
                <p>I build high-quality web applications with modern technologies.</p>  
                <p>In the future, I will also focus on App Development.</p>  

                <Link 
                    to="/projects" 
                    style={{
                        display: "inline-block",
                        marginTop: "20px",
                        padding: "12px 28px",
                        background: "linear-gradient(135deg, #ff5733, #b33000)",
                        color: "white",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        borderRadius: "8px",
                        textDecoration: "none",
                        boxShadow: "0px 4px 12px rgba(179, 48, 0, 0.3)",
                        transition: "all 0.3s ease-in-out",
                        border: "none",
                        position: "relative",
                        overflow: "hidden",
                    }}
                    onMouseOver={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #b33000, #ff5733)";
                        e.target.style.transform = "translateY(-3px)";
                        e.target.style.boxShadow = "0px 6px 18px rgba(179, 48, 0, 0.5)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = "linear-gradient(135deg, #ff5733, #b33000)";
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0px 4px 12px rgba(179, 48, 0, 0.3)";
                    }}
                    onMouseDown={(e) => {
                        e.target.style.transform = "translateY(1px)";
                        e.target.style.boxShadow = "0px 2px 8px rgba(179, 48, 0, 0.5)";
                    }}
                >
                    View My Work
                </Link>

                {/* Ad Container */}
                <div id="ad-container" style={{ marginTop: "20px", textAlign: "center" }}></div>
            </div>  
        </div>  
    );  
};  

export default Home;